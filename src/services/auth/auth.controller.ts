import { NextFunction, Request, Response } from "express";
import BcryptUtility from "../../utils/bcrypt";
import { Exception400, Exception401, Exception403 } from "../../utils/exception";
import JWTUtility from "../../utils/jwt";
import Controller from "../controller";
import UserController from "../users/users.controller";
import User from "../users/users.entity";
import UserModel from "../users/users.model";
import Auth from "./auth.entity";
import AuthModel from "./auth.model";

class AuthController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Auth, AuthModel)
    }

    public signup = async () => {
        const rawData = this.body;
        let user;

        // Create user
        try {
            user = await new UserController(this.req, this.res, this.next).signupWithEmail(rawData);
        } catch (error: any) {
            const message = { error: { message: error.detail } };
            throw new Exception400("User creation failed.", message);
        }
        
        // Generate token
        const payload = { id: user.id, role: 'user' }
        const access_token = await new JWTUtility().generateAccessToken(payload);
        const verifiedPayload = new JWTUtility().verifyAccessToken(access_token);

        // Save token
        await this.saveToken(access_token, verifiedPayload);

        this.success201({ user, access_token }, "Successfully signed up.");
    }

    public signin = async () => {
        const { email, password } = this.body;
        
        // Get user by email
        let user: User = await new UserModel().getUserByEmail(email);
        if ( !user || !user.password ) throw new Exception401("Authentication failed.");
        if ( user.status !== 'active') throw new Exception403("Account has been disabled by admin.")

        // Validate password
        const isValid = new BcryptUtility().compareString(user.password, password);
        if ( isValid !== true ) throw new Exception401("Authentication failed.");

        // Generate Token;
        const payload = { id: user.id, role: user.role }
        const access_token = new JWTUtility().generateAccessToken(payload);
        const verifiedPayload = new JWTUtility().verifyAccessToken(access_token);

        // Save token
        await this.saveToken(access_token, verifiedPayload);
        
        user = await new UserModel().fetchProfile(user.id);
        this.success201({ access_token, user }, "Authentication success.");
    }

    public signout = async () => {
        const { token } = this.session;
        
        const authData = await this.model.getAuthRecordByToken(token);
        const result = await this.repository.delete(authData.id);

        this.success200(result, "Singout successfull.");
    }

    private saveToken = async (token: string, payload: any) => {
        const data: Auth = { ...payload, user_id: payload.id, token }
        const  newAuth = await this.repository.create(data);
        return await this.repository.save(newAuth);
    }

}

export default AuthController;