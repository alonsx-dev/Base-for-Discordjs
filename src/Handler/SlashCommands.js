const fs = require("fs")

module.exports = async (client) => {
    const SlashsArray = []

    fs.readdir(`./src/SlashCommands`, (error, folder) => {
        folder.forEach((subfolder) => {
            fs.readdir(`./src/SlashCommands/${subfolder}/`, (error, files) => {
                files.forEach((file) => {
                    if (!file?.endsWith('.js')) return
                    const command = require(`../SlashCommands/${subfolder}/${file}`)
                    if (!command?.name) return
                    client.slashCommands.set(command.name, command)

                    SlashsArray.push(command)
                })
            })
        })
    })

    client.once('ready', async () => {
        await client.application.commands.set(SlashsArray)
    })
}
