import * as jwt from 'jsonwebtoken';

class JWTUtility {

    private accessTokenSecret: jwt.Secret;
    private accessTokenLife: string;

    constructor() {
        this.accessTokenSecret = (process.env.NODE_ENV === 'production') ? process.env.JWT_ACCESS_TOKEN_SECRET_PRODUCTION as string : process.env.JWT_ACCESS_TOKEN_SECRET_DEVELOPMENT as string
        this.accessTokenLife = (process.env.NODE_ENV === 'production') ? process.env.JWT_TOKEN_LIFE_PRODUCTION as string : process.env.JWT_TOKEN_LIFE_DEVELOPMENT as string;
    }

    public generateAccessToken = (payload: any) => {
        return jwt.sign({...payload, type: 'ACCESS_TOKEN'}, this.accessTokenSecret, { expiresIn: this.accessTokenLife });
    }

    public verifyAccessToken = (access_token: string) => {
        try {
            return jwt.verify(access_token, this.accessTokenSecret);
        } catch (error) {
            return null;
        }
    }

}

export default JWTUtility;
