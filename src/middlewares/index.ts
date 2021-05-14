import corsMiddleware from "./cors";
import helmetMiddleware from "./helmet";
import parserMiddleware from "./parser";
import handleTimeout from "./timeout";

const middlewares = [
    parserMiddleware,
    corsMiddleware,
    helmetMiddleware,
    handleTimeout
];

export default middlewares;