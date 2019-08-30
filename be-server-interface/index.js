const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9999;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/is_newer', async (req, res) => {
  const name = req.query.name;
  const is_newer = await check_newer(name);

  if (is_newer) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post('/join_request', async (req, res) => {
  const name = req.query.name;

  record_join_request(name).then(result => {
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
let serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

function check_newer(name) {
  return new Promise((resolve, reject) => {
    let playerRef = db.collection('players').doc(name);
    playerRef.get().then(doc => {
      if (!doc.exists) { 
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

function record_join_request(name) {
  return new Promise((resolve, reject) => {
    let playerRef = db.collection('players').doc(name);
    playerRef.get().then(doc => {
      if (!doc.exists) {
        // 新規プレイやー
        playerRef.set({name, created_at: Date.now()});
      } else {
        // 既存プレイやー
        const player = doc.data();
        if (player.banned === true) {
          reject();
          return;
        } 
      }

      resolve();
    })
  });
}

db.collection('players').where('banned', '==', true).onSnapshot(querySnapshot => {
  querySnapshot.docChanges().forEach(change => {
    const player = change.doc.data();
    const name = player.name;

    if (player.banned === true) {
      console.log(`whitelist remove ${name}`)
      console.log(`kick ${name} ${player.ban_reason}`);
    }
  });
});

db.collection('players').where('banned', '==', false).onSnapshot(querySnapshot => {
  querySnapshot.docChanges().forEach(change => {
    const player = change.doc.data();
    const name = player.name;

    if (player.banned === false) {
      console.log(`whitelist add ${name}`)
    }
  });
});