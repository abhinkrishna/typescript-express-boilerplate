import express from "express";
import server from "./config/server";
import router from "./services/router";

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(server.port, () => {
    console.log(`${server.name} server running on http://localhost:${server.port}`);
});
