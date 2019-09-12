import express from 'express';
import bodyParser from 'body-parser';
import * as logController from './controllers/log';
import * as commandController from './controllers/command';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/server_log', logController.postLog);
app.post('/discord_command', commandController.discordCommand);

export default app;