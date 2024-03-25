const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()){

			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`Aucune commande ${interaction.commandName} n'a été trouvé.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ content: 'Une erreur est survenue durant l\'execution de cette commande !', ephemeral: true });
				} else {
					await interaction.reply({ content: 'Une erreur est survenue durant l\'execution de cette commande !', ephemeral: true });
				}
			}

		}
		
		if(interaction.isButton()){
			try{
				const embed = new EmbedBuilder().setColor('#6900D7');

				// Monster
				if(interaction.customId === "button_monster_avance"){
					embed.setTitle('**__👾 ⦁ MONSTER __**')
						.setDescription(`Monster, how should I feel?\nCreatures lie here, looking through, through, through, through\nMonster, how should I fe-ee-el?\nCreatures lie here, looking through the window\n\nMonster, how should I feel?\nCreatures lie here, looking through the window\n\nMonster, monster, monster, monster\nMon-mon-mon-mon-mon-\n\nMonster\nHow should I feel?\n\nMonster\nHow should I feel?`)
						.setFooter({text: 'MONSTERRR 2/2'});

					const button_monster_retour = new ButtonBuilder()
						.setCustomId('button_monster_retour')
						.setLabel('<-')
						.setStyle(ButtonStyle.Primary);
					
					const button_monster_avance = new ButtonBuilder()
						.setCustomId('button_monster_avance')
						.setLabel('->')
						.setStyle(ButtonStyle.Secondary)
						.setDisabled();

					const row = new ActionRowBuilder()
						.addComponents(button_monster_retour, button_monster_avance);

					interaction.update({embeds : [embed], components: [row]});
				}
 
				if(interaction.customId === "button_monster_retour"){
					embed.setTitle('**__👾 ⦁ MONSTER __**')
						.setDescription(`Monster, how should I feel?\nCreatures lie here, looking through the window\nMonster, how should I feel?\nCreatures lie here, looking through the window\n\nMonster, how should I feel?\nCreatures lie here, looking through the window\nMonster, how should I feel?\nCreatures lie here, looking through the window\n\nMonster, monster, monster, monster\nMon-mon-mon-mon-monster\n\nMonster\nHow should I feel?\n\nMonster\nHow should I feel?`)
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

					interaction.update({embeds : [embed], components: [row]});
				}
			} catch(e){
				console.log(`Erreur : Impossible de répondre au bouton ${interaction.customId}`)
			}
		}
	},
};