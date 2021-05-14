import { NextFunction, Request, Response } from "express"
import { tz } from "moment-timezone";
import { SuccessResponses } from "../utils/success";


class Controller extends SuccessResponses {

    public req: Request;
    public res: Response;
    public next: Function;
    public body: any;
    public params: any;
    public timestamp: Date;
    public currentUserId;

    constructor(req: Request, res: Response, next: NextFunction) {
        super();
        this.req = req;
        this.res = res;
        this.next = next;
        const { body, params } = req;
        this.body = body;
        this.params = params;
        this.timestamp = tz(process.env.SYSTEM_TIMEZONE as string).format() as any;
        if (req?.currentUser?.id) this.currentUserId = req.currentUser.id;
    }

    public response200 = (data?: any, message?: string) => {
        this.res.status(200).json(this.getObject(200, data, message));
    }

    public response201 = (data?: any, message?: string) => {
        this.res.status(201).json(this.getObject(201, data, message));
    }

    public response202 = (data?: any, message?: string) => {
        this.res.status(202).json(this.getObject(202, data, message));
    }

    public response204 = (data?: any, message?: string) => {
        this.res.status(204).json(this.getObject(204, data, message));
    }

}

export default Controller;