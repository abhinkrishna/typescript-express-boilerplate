import express from 'express';
import postgreSQLDefaultConfig from './config/postgres';
import server from './config/server';
import initPostgresDB from './connections/postgres';
import routes from './routes/router';

const app = express();

app.use(express.static('public'));

initPostgresDB(postgreSQLDefaultConfig).then((pgConnection) => {
    app.use('/api', routes);
    
    app.listen(server.port, server.host, () => {
        console.log(`running server on http://${server.host}:${server.port}`);
    });
})

