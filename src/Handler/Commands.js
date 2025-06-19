const fs = require("fs");

module.exports = async (client) => {
    const SlashsArray = []

    fs.readdir(`./src/Commands`, (error, folder) => {
        folder.forEach((subfolder) => {
            fs.readdir(`./src/Commands/${subfolder}/`, (error, files) => {
                files.forEach((file) => {
                    if (!file?.endsWith('.js')) return
                    const command = require(`../Commands/${subfolder}/${file}`)
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
