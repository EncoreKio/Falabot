const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('C\'est pas dispo'),
	async execute(interaction) {
        await interaction.reply('Pas encore dispo, reviens après :\')')
    },
};