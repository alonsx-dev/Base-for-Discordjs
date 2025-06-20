const Discord = require('discord.js')
const client = require('../../index')

client.on("interactionCreate", (interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        const cmd = client.slashCommands.get(interaction.commandName)

        if (!cmd) return interaction.reply({ content: `🚫 Invalid Command.`, ephemeral: true })

        cmd.run(client, interaction)
    }
})
