const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/n80SahjQavAAAAAM/kenosbynpesta.gif",
    "https://media.tenor.com/PBpRWDTtUSMAAAAM/year-hare-affair-rabbit.gif",
    "https://media.tenor.com/UQNlRH-B9lAAAAAM/yes-pdp.gif",
    "https://media.tenor.com/Gqk5DONplrkAAAAM/communism-communist.gif",
    "https://media.tenor.com/CeG86jJ2aWkAAAAM/communist-pikachu.gif",
    "https://media.tenor.com/_4K2bdc1VroAAAAM/country-russia.gif",
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('communist')
		.setDescription('Soit communiste et devient un camarade.'),

	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("**__☭  ⦁ CAMARAAADE__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setDescription(`<@${interaction.user.id}> est un camarade`)
            .setColor('#FF3600');

        interaction.reply({embeds : [embed]})
    },
};