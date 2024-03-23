const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dee')
        .setDescription('Tire une face aléatoire d\'un dée comme le frenchmonster')
        .addIntegerOption(option => option.setName('face').setDescription('Combien de face a le dée ?')),

    async execute(interaction) {
        const face = interaction.options.getInteger('face');
        const embed = new EmbedBuilder  ()
            .setTitle('__**🎲 ⦁  Dée**__')
            .setColor('#6900D7')
            .setFooter({text:'Le gros dée du frenchmonster'});
        if(face){
            if (face > 1 && face < 99) { 
                let number = Math.floor((Math.random() * face) + 1);
                embed.setDescription(`Le dée est tombé sur la face \`${number}\` du dée de \`${face}\` faces.`)
                await interaction.reply({embeds: [embed]});
            }else if(face === 99) {
                let number = Math.floor((Math.random() * face) + 1);
                embed.setDescription(`Le dée est tombé sur la face \`${number}\` du dée de \`${face}\` faces. *(ça fais beaucoup de face :o)*`)
                await interaction.reply({embeds: [embed]});
            } else {
                embed.setDescription(`Le nombre \`${face}\` est invalide :\n Veuillez choisir un nombre entre 2 et 99.`);
                await interaction.reply({embeds: [embed], ephemeral: true});
            };
        }else{
            let number = Math.floor((Math.random() * 6) + 1);
            embed.setDescription(`Le dée est tombé sur \`${number}.\``);
            await interaction.reply({embeds: [embed]});
        }
    },
};