import { NextFunction, Request, Response, Router } from "express"
import { Method, Route } from "../types/route"


const initRoutes = async (routes: Route[], serverRouter: Router) => {
    for (const route of routes) {
        const { path, method, access, controller } = (route as any);
        
        (serverRouter as any)[Method[method] as string](`/api${path}`, async (req: Request, res: Response, next: NextFunction) => {
            try {
                await controller(req, res, next)
            } catch(err) {
                next(err)
            }
        });

    }
}

export default initRoutes;