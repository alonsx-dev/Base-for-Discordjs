const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    intents: [Discord.GatewayIntentBits.Guilds]
})

module.exports = client

client.slashCommands = new Discord.Collection()
require('./Handler/Commands')(client)
require('./Handler/Events')(client)

client.login(process.env.TOKEN)
