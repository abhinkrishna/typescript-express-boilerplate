import { NextFunction, Request, Response } from "express";

// Functional

export const userText = (req: Request, res: Response, next: NextFunction) => res.json({ message: `Functional user api test`});

export const userCreate = async (req: Request, res: Response, next: NextFunction) => {
    const { body, params } = req;
    const { name, dob, gender } = body;
    // Validation uniques checks
    // Insert user to Database
    res.json({ name, dob, gender });    
}

export const userReadOne = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    // get user details from database with given id
    res.json({ name: 'John Doe', dob: "Jan 2, 2000", gender: "m" }); 
}

// Object oriented
export class UserController {
    
    public req: Request;
    public res: Response;
    public next: NextFunction;
    public body: any;
    public params: any;

    constructor(request: Request, response: Response, nextFunction: NextFunction) {
        this.req = request;
        this.res = response;
        this.next = nextFunction;
        this.body = request.body;
        this.params = request.params;
    }

    public create = async () => {
        const { name, dob, gender } = this.body;
        this.res.json({ name, dob, gender });
    }

    public readOne = async () => {
        const { id } = this.body;
        // get user details from database with given id
        this.res.json({ name: 'John Doe', dob: "Jan 2, 2000", gender: "m" }); 
    }

}
