const client = require('../../index')
require('dotenv').config()

const prefix = process.env.PREFIXO

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) console.log(prefix)
    if (message.author.bot) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    
    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName))
    if (!command) return
    
    try {
        await command.run(client, message, args)
    } catch (err) {
        console.error(`❌️ There was an error running the PrefixCommand ${commandName}: ${err}`)
    }
})