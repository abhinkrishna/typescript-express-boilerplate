import { NextFunction, Request, Response } from "express";

export enum Roles {
    'user',
    'admin'
}

export enum Method {
    'get',
    'post',
    'patch',
    'put',
    'delete',
}

export type Route = {
    path: string,
    method: Method,
    access: Roles[],
    validator?: any,
    middlewares?: ((req: Request, res: Response, next: NextFunction) => any)[],
    controller: ((req: Request, res: Response, next: NextFunction) => Promise<void> | void)
}
