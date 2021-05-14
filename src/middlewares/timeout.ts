import { NextFunction, Request, Response, Router } from "express";
import { Exception408, Exception503 } from "../utils/exception";


export const TimeoutHandler = async (req: Request, res: Response, next: NextFunction) => {
    const timeOut: number = 10000;
    // set timeout for all HTTP requests
    req.setTimeout(timeOut, () => {
        next(new Exception408("Request Timeout"));
    });
    // set the server response timeout for all HTTP requests
    res.setTimeout(timeOut, () => {
        next(new Exception503("Service unavailable"));
    })

    next();
}

const handleTimeout = (serverRouter: Router) => {
    serverRouter.use((req: Request, res: Response, next: NextFunction) => {
        TimeoutHandler(req, res, next);
    });
}

export default handleTimeout;