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
    controller: ((req: Request, res: Response, next: NextFunction) => Promise<void> | void)
}
