const fs = require('fs')

module.exports = async (client) => {
    fs.readdir('./src/PrefixCommands', (error, folder) => {
        folder.forEach((subfolder) => {
            fs.readdir(`./src/PrefixCommands/${subfolder}/`, (error, files) => {
                files.forEach((file) => {
                    if (!file?.endsWith('.js')) return
                    const command = require(`../PrefixCommands/${subfolder}/${file}`)
                    if (!command?.name) return
                    client.commands.set(command.name, command)
                    
                    if (!command.aliases) return
                    const formatAliases = command.aliases.map(alias => alias.trim().toLowerCase()).filter(alias => alias.length > 0)
                    formatAliases.forEach(alias => client.aliases.set(alias, command.name))
                })
            })
        })
    })
}