const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/5mVQ3ffWUTgAAAAM/anime-bite.gif",
    "https://media.tenor.com/MGuHaYdPUJ4AAAAM/my-hero-academia-anime.gif",
    "https://media.tenor.com/0neaBmDilHsAAAAM/anime-bite.gif",
    "https://media.tenor.com/6HhJw-4zmQUAAAAM/anime-bite.gif",
    "https://media.tenor.com/1LtA9dSoAIQAAAAM/zero-no-tsukaima-bite.gif",
    "https://media.tenor.com/ECCpi63jZlUAAAAM/anime-bite.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('mordre')
		.setDescription('Ça fait bobo au UwU-Baka..')
        .addMentionableOption(option => option.setName('utilisateur').setDescription('À qui veux-tu faire une UwU Morsure ?')),

	async execute(interaction) {
        const user_mention = interaction.options.getMentionable("utilisateur");
        const embed = new EmbedBuilder()
            .setTitle("**__😬 ⦁ Biting__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setColor('#6900D7');
        
        if(!user_mention){
            embed.setDescription(`<@${interaction.user.id}> fait une morsure`);
        } else {
            embed.setDescription(`<@${interaction.user.id}> mord <@${user_mention.user.id}>`);
        }

        interaction.reply({embeds : [embed]})
    },
};