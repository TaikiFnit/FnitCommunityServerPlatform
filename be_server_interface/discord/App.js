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

client.login(token);