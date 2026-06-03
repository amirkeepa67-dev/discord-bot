const {
Client,
GatewayIntentBits,
SlashCommandBuilder,
Routes
} = require('discord.js');

const { REST } = require('@discordjs/rest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
res.send('Bot is running!');
});

app.listen(3000, () => {
console.log('Web server running');
});

const client = new Client({
intents: [GatewayIntentBits.Guilds]
});

const commands = [
new SlashCommandBuilder()
.setName('ping')
.setDescription('Replies with Pong!')
.toJSON()
  const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
try {
console.log('Registering slash commands...');

await rest.put(
Routes.applicationCommands('1511366077077258351'),
{ body: commands }
);

console.log('Slash commands registered');
} catch (error) {
console.error(error);
}
})();

client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
if (!interaction.isChatInputCommand()) return;

if (interaction.commandName === 'ping') {
await interaction.reply('Pong!');
}
});

client.login(process.env.TOKEN);
