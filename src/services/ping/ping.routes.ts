import { NextFunction, Request, Response } from "express";
import { Method, Route } from "../../types/route";
import UserController from "./ping.controller";


const routes: Route[] = [
    {
        path: "/ping",
        method: Method.get,
        access: [],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new UserController(req, res, next).ping();
        }
    }
];


export default routes;