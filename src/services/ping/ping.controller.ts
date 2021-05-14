import { NextFunction, Request, Response } from "express"
import Controller from "../controller"

class PingController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next)
    } 

    public ping = async () => {
        this.response200();
    }

}

export default PingController;