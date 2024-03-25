const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('monster')
		.setDescription('monster...'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
            .setTitle('**__👾 ⦁ MONSTER __**')
			.setDescription(`Monster, how should I feel?\nCreatures lie here, looking through the window\nMonster, how should I feel?\nCreatures lie here, looking through the window\n\nMonster, how should I feel?\nCreatures lie here, looking through the window\nMonster, how should I feel?\nCreatures lie here, looking through the window\n\nMonster, monster, monster, monster\nMon-mon-mon-mon-monster\n\nMonster\nHow should I feel?\n\nMonster\nHow should I feel?`)
			.setColor('#6900D7')
            .setFooter({text: 'MONSTERRR 1/2'});
		

		const button_monster_retour = new ButtonBuilder()
			.setCustomId('button_monster_retour')
			.setLabel('<-')
			.setStyle(ButtonStyle.Secondary)
			.setDisabled();
		
		const button_monster_avance = new ButtonBuilder()
			.setCustomId('button_monster_avance')
			.setLabel('->')
			.setStyle(ButtonStyle.Primary);

		const row = new ActionRowBuilder()
			.addComponents(button_monster_retour, button_monster_avance);

		interaction.reply({embeds : [embed], components: [row]})

	},
};

