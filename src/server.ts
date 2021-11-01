import express from 'express';
import server from './config/server';

const app = express();

app.all('/', (req, res) => {
    res.send('Hello World');
});

app.listen(server.port, server.host, () => {
    console.log(`running server on http://${server.host}:${server.port}`);
});
