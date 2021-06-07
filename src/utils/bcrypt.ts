import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

class BcryptUtility {
    
    public hashString = (string: string) => {
        const rounds = Number(process.env.ENCRYPTION_ROUNDS) ?? 10;
        const salt = bcrypt.genSaltSync(rounds);
        return bcrypt.hashSync(string, salt);
    }

    public compareString = (hash: string, string: string) => {
        return bcrypt.compareSync(string, hash);
    }
    
}

export default BcryptUtility;