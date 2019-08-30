const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9999;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/join_request', (req, res) => {
  const name = req.query.name;
  console.log(`whitelist add ${name}`);
  res.send('ok');
});

app.post('/stop', (req, res) => {
  console.log('stop');
  res.send('ok');
});

app.listen(port);
