module.exports = {
    name: 'test',
    aliases: ['t', 'teste'],
    run: async (client, message, args) => {
        message.reply('# 👋 Hello World!')
    }
}
