import { Router } from "express";
import helmet from "helmet";

const helmetMiddleware = (app: Router) => {
    // use helmet middleware
    app.use(helmet());
}

export default helmetMiddleware;