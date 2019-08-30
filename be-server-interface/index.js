const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9999;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/join_request', async (req, res) => {
  const name = req.query.name;

  record_join_request.then(result => {
    console.log(`whitelist add ${name}`);
    res.send('ok');
  }).catch(err => {
    res.send('ng');
  });
});

app.post('/stop', (req, res) => {
  console.log('stop');
  res.send('ok');
});

app.listen(port);


// db

const admin = require('firebase-admin');
let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

function record_join_request(name) {
  return new Promise((resolve, reject) => {
    let playerRef = db.collection('players').doc(name);
    playerRef.get().then(doc => {
      if (!doc.exists) {
        // 新規プレイやー
        playerRef.set({name, created_at: Date.now()});
        resolve();
      } else {
        // 既存プレイやー
        reject();
      }
    })
  });
}