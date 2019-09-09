import express from "express";
import bodyParser from "body-parser";
import * as logController from "./controllers/log";
import * as entranceController from './controllers/entrance';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/server_log', logController.postLog);

app.post('/is_player_authenticated', entranceController.is_player_authenticated);
app.post('/publish_receipt_number', entranceController.publish_receipt_number);

export default app;