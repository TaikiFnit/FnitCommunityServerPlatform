const express = require('express');

const app = express();
const port = 8888;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/command', async (req, res) => {
    const command = req.body.command;
    console.log(command);
    res.send('ok');
});

app.listen(port);
