import { NextFunction, Request, Response } from "express";
import Auth from "../services/auth/auth.entity";
import AuthModel from "../services/auth/auth.model";
import { Roles } from "../types/route";
import { Exception400, Exception401 } from "../utils/exception";
import JWTUtility from "../utils/jwt";

const authAccess = (route_roles: Roles[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token: string = req.headers['x-access-token'] as string;
        if ( !token ) return next(new Exception400("Authentication token required to access."));
        
        // Verify token
        const payloadData = new JWTUtility().verifyAccessToken(token);
        if ( !payloadData ) return next(new Exception401("Unable to authenticate token."));
        
        const authData: Auth = await new AuthModel().getAuthRecordByToken(token);
        if ( !authData ) return next(new Exception401("Unable to authorize token."));

        // Verify token with db values
        if ((payloadData as any).id !== authData.user_id || (payloadData as any).role !== authData.role || (payloadData as any).type !== "ACCESS_TOKEN") {
            return next(new Exception401('Unable to authenticate user.'));
        }

        // Check account has access rights
        if (route_roles.indexOf((Roles as any)[authData.role]) === -1) {
            return next(new Exception401("Unable to authorize user."))
        } else {
            const session = { id: authData.user_id, role: authData.role, token: token };
            req.session = session
            next();
        }

    }
}

export default authAccess;