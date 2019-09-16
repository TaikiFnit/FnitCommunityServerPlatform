//ログイン処理
const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();
const token = process.env.discord_token;

client.on('message', async message => {
    if(message.author.bot){
        return;
    }

    const author = {
        id: message.author.id,
        username: message.author.username,
        discriminator: message.author.discriminator,
        avatar: message.author.avatar
    };

    if (message.content.match(/\/fnit/)) {
        const [_, ...directives] = message.content.split(' ');
        const directivesString = directives.join(' ');

        const response = await axios.post('http://localhost:9999/discord_command', {
            directive: directivesString,
            author
        }).catch(async (err) => {
            await message.reply(err.response.data);
        });

        if (response && response.status === 200) {
            await message.reply(response.data);
        }
    }
});

client.on('message', message =>{
    return;
    if(message.author.bot){
        return;
    }

    if (message.content.match(/\/fcsc/)) {
        let [_, command_name, target, reason] = message.content.split(' ');

        if (command_name === 'help') {
            message.reply(`Command list:\n\
ban <player_name> <ban_reason>\n\
deban <player_name>\
            `);
        }

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

return;

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

          playerRef.set({banned: true, ban_reason, banned_date: Date.now()}, {merge: true});
          resolve();
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

            playerRef.set({banned: false, deban_date: Date.now()}, {merge: true})
            resolve();
        });
    });
}