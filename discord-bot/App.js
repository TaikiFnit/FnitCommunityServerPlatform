//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();
const token = process.env.discord_token;

client.on('ready', () => {
    console.log('ready...');
});

client.on('message', message =>{
    //Bot自身の発言を無視する呪い
    if(message.author.bot){
        return;
    }

    if (message.content.match(/help/)) {
        message.reply(`Command list:\n\
ban <player_name> <ban_reason>\
deban <player_name>\
        `);
    }

    if (message.content.match(/\/fcsc/)) {
        let [_, command_name, target, reason] = message.content.split(' ');

        if (command_name === 'ban') {
            if (target != null && reason != null) {
                ban_player(target, reason).then(() => {
                    message.reply(`${target}は「${reason}」によりwhitelistから削除されました`);
                }).catch(err => {
                    message.reply('Err: Playerが見つかりませんでした');
                });
            }
        }

        if (command_name === 'deban') {
            if (target != null) {
                deban_player(target).then(() => {
                    message.reply(`${target}はwhitelistに再度追加されました`);
                }).catch(err => {
                    message.reply('Err: Playerが見つかりませんでした');
                });
            }
        }
    }
});

client.login(token);


// db
const admin = require('firebase-admin');
let serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

function ban_player(name, ban_reason) {
    return new Promise((resolve, reject) => {
        let playerRef = db.collection('players').doc(name);
        playerRef.get().then(doc => {
          if (!doc.exists) { 
              reject();
              return;
          } 

          playerRef.set({banned: true, ban_reason, banned_date: Date.now()}, {merge: true})
        });
    });
}

function deban_player(name) {
    return new Promise((resolve, reject) => {
        let playerRef = db.collection('players').doc(name);
        playerRef.get().then(doc => {
            if (!doc.exists) { 
                reject();
                return;
            } 

            playerRef.set({banned: false, deban_date: Date.now()}, {merge: ture})
        });
    });
}