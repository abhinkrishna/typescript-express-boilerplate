import dotenv from 'dotenv';
dotenv.config();

const serverConfig = {
    name: 'ecom',
    port: process.env.SERVER_PORT || 1000,
}

export default serverConfig;