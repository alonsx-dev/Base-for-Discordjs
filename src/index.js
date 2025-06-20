const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ]
})

module.exports = client

client.slashCommands = new Discord.Collection()
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

require('./Handler/PrefixCommands')(client)
require('./Handler/SlashCommands')(client)
require('./Handler/Events')(client)


client.login(process.env.TOKEN)
