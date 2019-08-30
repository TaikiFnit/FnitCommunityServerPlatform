const admin = require('firebase-admin');
let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9999;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/player_joined', (req, res) => {
  const name = req.query.name;
  console.log(`whitelist add ${name}`);
  res.send('ok');
});

app.listen(port);
