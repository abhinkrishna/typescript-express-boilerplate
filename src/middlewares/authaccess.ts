import { NextFunction, Request, Response } from "express";
import { Exception401 } from "../utils/exception";


export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.headers['x-access-token'];
    if ( !token ) throw new Exception401("Authentication token required to access.");

    // Include authentication, authorization logic here... 

    next();
}
