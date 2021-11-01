
import { Router } from "express";

const route = Router();

route.all('/ping', (req, res) => {
    res
    .status(200)
    .json({
        status: 'success',
        statusCode: 200,
        statusCodeMessage: 'OK',
        message: 'successfully pinged',
        data: 'pong'
    })
});

export default route;