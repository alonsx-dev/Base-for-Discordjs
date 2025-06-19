const Discord = require('discord.js')

module.exports = {
    name: 'test',
    description: 'Test command.',
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.reply('# 👋 Hello World!')
    }
}
