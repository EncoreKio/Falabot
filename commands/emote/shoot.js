const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var actionTab = [
    "https://media.tenor.com/jmXGW0i31OcAAAAM/boom.gif",
    "https://media.tenor.com/RdfB0I6L0FIAAAAM/anime-triela.gif",
    "https://media.tenor.com/AGTqt-wXyiEAAAAM/nichijou-minigun.gif",
    "https://media.tenor.com/3n_NfJS73MMAAAAM/black-lagoon-revy.gif",
    "https://media.tenor.com/0XYRdBVKZQgAAAAM/anime-finger-gun.gif",
    "https://media.tenor.com/-4iB5H1jnL4AAAAM/teppen-anime-shoot.gif"
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('shoot')
		.setDescription('Tire sur quelqu\'un tel un french monster')
        .addMentionableOption(option => option.setName('utilisateur').setDescription('Sur qui veux tu tiré ?')),

	async execute(interaction) {
        const user_mention = interaction.options.getMentionable("utilisateur");
        const embed = new EmbedBuilder()
            .setTitle("**__🔫 ⦁ Shoot__**")
            .setImage(actionTab[~~(Math.random() * actionTab.length)])
            .setColor('#6900D7');
        
        if(!user_mention){
            embed.setDescription(`<@${interaction.user.id}> tire un coup de feu mais rate sa balle...`);
        } else {
            embed.setDescription(`<@${interaction.user.id}> tire un coup de feu sur <@${user_mention.user.id}> ! Gotaga serait fière de lui.`);
        }

        interaction.reply({embeds : [embed]})
    },
};