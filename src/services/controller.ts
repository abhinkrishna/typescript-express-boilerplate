import { NextFunction, Request, Response } from "express"
import { tz } from "moment-timezone";
import { getRepository } from "typeorm";
import { SuccessResponses } from "../utils/success";


class Controller extends SuccessResponses {

    public req: Request;
    public res: Response;
    public next: NextFunction;
    public body: any;
    public params: any;
    public timestamp: Date;
    public session: any;
    public repository: any;
    public model: any;

    constructor(req: Request, res: Response, next: NextFunction, entity?: any, model?: any) {
        super();
        this.req = req;
        this.res = res;
        this.next = next;
        const { body, params, session } = req;
        this.body = body;
        this.params = params;
        this.session = session;
        this.timestamp = tz(process.env.SYSTEM_TIMEZONE as string).format() as any;
        if ( entity ) this.repository = getRepository(entity);
        if ( model ) this.model = new model;
    }

    public success200 = (data?: any, message?: string) => {
        this.res.status(200).json(this.getObject(200, data, message));
    }

    public success201 = (data?: any, message?: string) => {
        this.res.status(201).json(this.getObject(201, data, message));
    }

    public success202 = (data?: any, message?: string) => {
        this.res.status(202).json(this.getObject(202, data, message));
    }

    public success204 = (data?: any, message?: string) => {
        this.res.status(204).json(this.getObject(204, data, message));
    }

}

export default Controller;