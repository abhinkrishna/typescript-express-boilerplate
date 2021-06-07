import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import AuthController from "./auth.controller";


const authRoute: Route[] = [
    {
        path: '/auth/signup',
        method: Method.post,
        access: [],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new AuthController(req, res, next).signup();
        }
    },
    {
        path: '/auth/signin',
        method: Method.post,
        access: [],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new AuthController(req, res, next).signin();
        }
    },
    {
        path: '/auth/signout',
        method: Method.post,
        access: [Roles.admin, Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new AuthController(req, res, next).signout();
        }
    },
];

export default authRoute;