const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('puant')
        .setDescription('Te rappel la strict vérité'),
    async execute(interaction) {
    	interaction.reply("REPART JOUER À LOL ÉSPÈCE DE PUANT")
    },
}
