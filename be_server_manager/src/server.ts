import express from "express";
import bodyParser from "body-parser";
import * as logController from "./controllers/log";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/server_log", logController.postLog);

export default app;