const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/My2v_lTI3LIAAAAC/hug-anime.gif",
    "https://media.tenor.com/J7eGDvGeP9IAAAAM/enage-kiss-anime-hug.gif",
    "https://media.tenor.com/kCZjTqCKiggAAAAM/hug.gif",
    "https://media.tenor.com/wUQH5CF2DJ4AAAAM/horimiya-hug-anime.gif",
    "https://media.tenor.com/7wZsxjO2_0YAAAAM/haze-lena.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Un calin de french monster')
        .addMentionableOption(option => option.setName('utilisateur').setDescription('À qui veux-tu faire un calin ?')),

	async execute(interaction) {
        const user_mention = interaction.options.getMentionable("utilisateur");
        const embed = new EmbedBuilder()
            .setTitle("**__🫂 ⦁ Hug__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setColor('#6900D7');
        
        if(!user_mention){
            embed.setDescription(`<@${interaction.user.id}> fait un câlin`);
        } else {
            embed.setDescription(`<@${interaction.user.id}> fait un câlin à <@${user_mention.user.id}>`);
        }

        interaction.reply({embeds : [embed]})
    },
};