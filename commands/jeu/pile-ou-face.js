const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('pile-face')
        .setDescription('Fait faire un 360 no scope à ta pièce comme le french monster'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('**__😴 ⦁ Pile ou Face__**')
            .setColor('#6900D7')
            .setFooter({text: 'La pièce du frenchmonster'});
        let face = Math.floor(Math.random()*2);
        if (face === 0) {
                embed.setDescription('Et la réponse sera... `Pile` !');
                await interaction.reply({embeds : [embed]});
        } else if (face === 1) {
                embed.setDescription('Et la réponse sera... `Face` !');
                await interaction.reply({embeds : [embed]});
        }
    },
}