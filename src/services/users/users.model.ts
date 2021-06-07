import { FindOneOptions } from "typeorm";
import Model from "../model";
import User from "./users.entity";

class UserModel extends Model {
    
    constructor() {
        super(User);
    }

    public fetchProfile = async (id: number, status = 'active') => {
        const select = [ "id", "full_name", "mobile", "email", "dob", "gender", "status" ];
        const whereClause = (status === 'all') ? { id } : { id, status };

        const option: FindOneOptions = { select: select, where: whereClause };
        return await this.repository.findOne(option);
    }

    public updateProfile = async (user: User, update: any) => {
        this.repository.merge(user, update);
        return await this.repository.save(user);
    }

    public getUserByEmail = async (email: string) => {
        const select = ["id", "email", "password", "role", "status"]; 
        const whereClause = { email: email };

        const option: FindOneOptions = { select: select, where: whereClause}
        const user = await this.repository.findOne(option);

        return user;
    }
}

export default UserModel;