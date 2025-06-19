const fs = require('fs')
const path = require('path')

module.exports = async (client) => {
    const loadEvents = (dir) => {
        const files = fs.readdirSync(dir)
        
        for (const file of files) {
            const fullPath = path.join(dir, file)
            const stat = fs.lstatSync(fullPath)

            if (stat.isDirectory()) {
                loadEvents(fullPath)
            } else if (file.endsWith('.js')) {
                const event = require(fullPath)

                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client))
                } else {
                    client.on(event.name, (...args) => event.execute(...args, client))
                }
            }
        }
    }
    
    const eventsPath = path.join(__dirname, '../Events')
    loadEvents(eventsPath)
}
