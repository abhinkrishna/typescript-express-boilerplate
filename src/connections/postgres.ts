import { ConnectionOptions, createConnection } from "typeorm"

const initPostgresDB = async (options: ConnectionOptions) => {
    return await createConnection(options);
}

export default initPostgresDB;