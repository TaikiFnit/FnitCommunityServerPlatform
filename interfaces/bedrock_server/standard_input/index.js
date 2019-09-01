const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9999;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/command', async (req, res) => {
    const command_name = decodeURIComponent(req.query.command);
    console.log(command_name);
    res.send('ok');
});

app.listen(port);