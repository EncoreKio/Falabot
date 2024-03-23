const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/wBEBBPUfHrUAAAAM/sistine-anime.gif",
    "https://media.tenor.com/TZju-aIuUmAAAAAM/baka-anime.gif",
    "https://media.tenor.com/VrfSZUjiWn4AAAAM/shy-anime.gif",
    "https://media.tenor.com/qcaSPLhZgBwAAAAM/anime-anime-shy.gif",
    "https://media.tenor.com/z3decH92y2gAAAAM/shy-embarrassed.gif",
    "https://media.tenor.com/BEbqNquXyswAAAAM/anime-crush.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('shy')
		.setDescription('Soit timide comme les ennemis du frenchmonster'),

	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("**__😳 ⦁ Shy__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setDescription(`<@${interaction.user.id}> est timide.. pas un bon frenchmonster`)
            .setColor('#6900D7');

        interaction.reply({embeds : [embed]})
    },
};