const {Client, Events, GatewayIntentBits } = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents:[GatewayIntentBits.Guilds]});
client.once(Events.ClientReady, readyClient =>{
    console.log(`me logged in as ${readyClient.user.tag}`);

});
client.login(token)