const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		const guild = interaction.guild
		const embed = new EmbedBuilder()
			.setTitle(`Information du serveur ${guild.name} :`)
			.addFields( { name: 'Créateur', value: 'Value 1' },
						{ name: 'Field 1', value: 'Value 1' },
						{ name: 'Field 1', value: 'Value 1' },
						{ name: 'Field 1', value: 'Value 1' },
						{ name: 'Field 1', value: 'Value 1 (la commande est abandonné btw' });
		interaction.reply({embeds : [embed]})
	},
};