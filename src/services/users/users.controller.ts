import { NextFunction, Request, Response } from "express";
import BcryptUtility from "../../utils/bcrypt";
import { Exception400, Exception404, Exception500 } from "../../utils/exception";
import Controller from "../controller";
import User from "./users.entity";
import UserModel from "./users.model";

class UserController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, User, UserModel)
    }

    public create = async () => {
        const rawData = this.body;
        const data = await this.processData(rawData);
        
        // Create user
        const newUser = await this.repository.create(data);
        const user = await this.repository.save(newUser);

        if ( !user ) throw new Exception400("User creation failed.")
        this.success201({ user }, "Created user successfully.")
    };

    public readOne = async () => {
        const { id } = this.params;

        // Get user
        const user: User = await this.repository.findOne(id)
        if ( !user ) throw new Exception404("User not found.")

        // Remove password field from user data object
        delete (user as any).password; 

        this.success200({ user }, "User exist.")
    };

    public readMany = async () => {

        const { order_by, order, page, size } = this.body;

        const users: User[] = await this.repository.find(
            this.model.paginationOptions(order_by, order, page, size)
        );

        if ( !users ) throw new Exception400("Users not found.")
        this.success200(users, "User data fetch successfully.");
    }

    public update = async () => {
        const { id } = this.params;
        const rawData: any = this.body;

        // Get user
        const user: User = await this.repository.findOne(id);
        if( !user ) throw new Exception404("User not found.");

        // Raw data manipulation
        const data: any = await this.processData(rawData);

        // Update user
        this.repository.merge(user, data);
        await this.repository.save(user);

        const updatedUser = await this.repository.findOne(id);
        this.success202(updatedUser, "User updated successfully.");
    }

    public updateStatus = async () => {
        const { id } = this.params;
        const { status } = this.body;

        // Get user
        const user: User = await this.repository.findOne(id);
        if( !user ) throw new Exception404("User not found.")

        // Update user
        this.repository.merge(user, { status })
        await this.repository.save(user);

        this.success202({}, "User status updated successfully.")
    }

    public delete = async () => {
        const { id } = this.params;

        // Soft Delete
        const user: User = await this.repository.findOne(id);
        await this.repository.softRemove(user);

        this.success204("User will be deleted if exists.")
    }

    public readProfile = async () => {
        const id = this.session.id;

        // Get user profile by id.
        const user = await this.model.fetchProfile(id);
        if ( !user ) throw new Exception400("Account no longer active or may deleted.");

        this.success200({ user }, "User profile fetched successfully.");
    }

    public updateProfile = async () => {
        const id = this.session.id;
        const { full_name, mobile, dob, gender, password } = this.body;
        const rawData: any = { full_name, mobile, dob, gender, password };
        
        // Get user
        let user: User = await this.repository.findOne(id);
        if( !user ) throw new Exception404("User not found.");

        // Raw data manipulation
        let data: User = await this.processData((rawData as User));

        // Update
        await this.model.updateProfile(user, data);
        
        // Fetch profile
        user = await this.model.fetchProfile(id, 'all');

        this.success202({ user }, "User profile updated successfully.");
    }

    private processData = async (user: User) => {
        // Encrypt password
        if ( user.password ) {
            user.password = new BcryptUtility().hashString(user.password);
        }

        // Delete role if assigned by the user [ Important! ]
        if ( user.role ) delete (user as any).role;

        return user;
    }

    private fileterData = async (data: User) => {
        if ( data.password ) delete (data as any).password;
        if ( data.role ) delete (data as any).role;
        
        return data;
    } 

    public signupWithEmail = async (rawUserData: User) => {
        const data = await this.processData(rawUserData);
        
        // Create user
        const newUser = await this.repository.create(data);
        const user: User = await this.repository.save(newUser);
        return this.fileterData(user);
    }


    
}

export default UserController;