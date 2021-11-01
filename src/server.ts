import express from 'express';
import server from './config/server';
import routes from './routes/router';

const app = express();

app.use(express.static('public'));

app.use('/api', routes);

app.listen(server.port, server.host, () => {
    console.log(`running server on http://${server.host}:${server.port}`);
});
