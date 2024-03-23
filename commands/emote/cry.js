const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/0qj0aqZ0nucAAAAM/anya-spy-x-family-anime-anya-crying.gif",
    "https://media.tenor.com/V68-MgqFCdEAAAAM/kaoruko-moeta-comic-girls.gif",
    "https://media.tenor.com/pqXmHpbIy0MAAAAM/anime-anime-hug.gif",
    "https://media.tenor.com/R7znNIFZZzMAAAAM/anime-cry.gif",
    "https://media.tenor.com/jchX5Rs6kP4AAAAM/anime-sad.gif",
    "https://media.tenor.com/r4sC8_Ilhf4AAAAM/baka-anime.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription('Pleurs comme un baka'),

	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("**__😭 ⦁ Crying__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setDescription(`<@${interaction.user.id}> pleure..`)
            .setColor('#6900D7');

        interaction.reply({embeds : [embed]})
    },
};