import { NextFunction, Request, Response } from "express"
import Controller from "../controller"

class PingController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next)
    } 

    public ping = async () => {
        this.success200("pong");
    }

}

export default PingController;