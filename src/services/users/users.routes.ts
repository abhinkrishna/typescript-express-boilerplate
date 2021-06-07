import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import UserController from "./users.controller";


const userRoute: Route[] = [
    {
        path: '/users/profile',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).readProfile();
        }
    },
    {
        path: '/users/profile',
        method: Method.patch,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).updateProfile();
        }
    },
    {
        path: '/users',
        method: Method.post,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).create();
        }
    },
    {
        path: '/users/:id',
        method: Method.get,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).readOne();
        }
    },
    {
        path: '/users',
        method: Method.get,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).readMany();
        }
    },
    {
        path: '/users/:id',
        method: Method.patch,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).update();
        }
    },
    {
        path: '/users/status/:id',
        method: Method.patch,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).updateStatus();
        }
    },
    {
        path: '/users/:id',
        method: Method.delete,
        access: [Roles.admin],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).delete();
        }
    },
    
]

export default userRoute;