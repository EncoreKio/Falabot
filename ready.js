const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`INFO : Lancé sous l'identifiant ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'League of Legends' }], status: 'online' });
	},
};