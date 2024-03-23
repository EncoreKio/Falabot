const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/7P7x7JObd98AAAAC/hori-kyouko-miyamura-izumi.gif",
    "https://media.tenor.com/ZDqsYLDQzIUAAAAM/shirayuki-zen-kiss-anime.gif",
    "https://media.tenor.com/BZyWzw2d5tAAAAAM/hyakkano-100-girlfriends.gif",
    "https://media.tenor.com/F02Ep3b2jJgAAAAM/cute-kawai.gif",
    "https://media.tenor.com/_8oadF3hZwIAAAAM/kiss.gif",
    "https://media.tenor.com/DDmZqcOZJisAAAAM/anime.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Un bisouuuuuuu si mignon :3')
        .addMentionableOption(option => option.setName('utilisateur').setDescription('À qui veux-tu faire un bisoUwU (baka de ferdinant fabre) ?')),

	async execute(interaction) {
        const user_mention = interaction.options.getMentionable("utilisateur");
        const embed = new EmbedBuilder()
            .setTitle("**__💏 ⦁ Kiss__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setColor('#6900D7');
        
        if(!user_mention){
            embed.setDescription(`<@${interaction.user.id}> fait un bisou`);
        } else {
            embed.setDescription(`<@${interaction.user.id}> fait un bisou à <@${user_mention.user.id}>`);
        }

        interaction.reply({embeds : [embed]})
    },
};