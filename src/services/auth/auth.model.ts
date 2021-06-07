import { FindOneOptions } from "typeorm";
import Model from "../model";
import Auth from "./auth.entity";

class AuthModel extends Model {

    constructor() {
        super(Auth);
    }
    
    public getAuthRecordByToken = async (token: string) => {
        const option: FindOneOptions = { where: { token }};
        return await this.repository.findOne(option);
    }

}

export default AuthModel;