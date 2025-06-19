const client = require('../../index.js')
const Discord = require('discord.js')

client.once('ready', () => {
    console.log('🚀 Bot started successfully!')
    console.log(`🤖 Logged in as: ${client.user.tag}`)
    console.log(`🆔️ ID: ${client.user.id}`)
    console.log(`📡 Connected to ${client.guilds.cache.size} servers!`)
})
