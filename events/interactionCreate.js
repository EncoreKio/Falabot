const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`Aucune commande ${interaction.commandName} n'a été trouvé.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Une erreur est survenue durant l\'execution de cette commande !', ephemeral: true });
			} else {
				await interaction.reply({ content: 'Une erreur est survenue durant l\'execution de cette commande !', ephemeral: true });
			}
		}
	},
};