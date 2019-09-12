const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/command', async (req, res) => {
    const command = req.body.command;
    console.log(command);
    res.send('ok');
});

app.listen(port);