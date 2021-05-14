import express from 'express';
import server from './config/server';
import middlewares from './middlewares';
import errorHandlers from './middlewares/errors';
import allRoutes from './services/routes';
import initMiddlewares from './utils/middleware';
import initRoutes from './utils/routes';

const app = express();

// initializing all middlewares
initMiddlewares(middlewares, app);

// initializing all routes
initRoutes(allRoutes, app)

// initialing errors handlers
initMiddlewares(errorHandlers, app);

app.listen(server.port, () => {
    console.log(`${server.name} running on http://${server.host}:${server.port}`);
})

process.on('uncaughtException', (e) => {
    console.log(e);
});

process.on('unhandledRejection', (e) => {
    console.log(e);
});
