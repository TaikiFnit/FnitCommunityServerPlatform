import * as firebase from 'firebase-admin';
let serviceAccount = require('../../serviceAccountKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

let db = firebase.firestore();

export default db;