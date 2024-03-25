const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');


// Initialisation du client
const client = new Client({ intents: [GatewayIntentBits.Guilds,  GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });


// Partie vocale
const voiceConnections = new Map();

client.on('voiceStateUpdate', async (oldState, newState) => {
    // Vérifie si quelqu'un a rejoint un salon vocal
    if (!oldState.channelId && newState.channelId ) {
        // Verifie si le salon rejoint a pour nom gotag (private joke)
        if (newState.channel.name !== "gotag") return;
        try {
            const connection = joinVoiceChannel({
                channelId: newState.channelId,
                guildId: newState.guild.id,
                adapterCreator: newState.guild.voiceAdapterCreator,
            });

            // Vérifie si le bot est déjà en train de jouer dans ce serveur
            if (!voiceConnections.has(newState.guild.id)) {
                const player = createAudioPlayer();

                // Chemin vers le fichier audio
                const filePath = 'music.mp3';

                // Vérifie si le fichier audio existe
                if (fs.existsSync(filePath)) {
                    const resource = createAudioResource(filePath);
                    player.play(resource);

                    // Attend la fin de la lecture
                    player.on('stateChange', (oldState, newState) => {
                        if (newState.status === VoiceConnectionStatus.Disconnected) {
                            console.log('destroy');
                            connection.destroy();
                            // Supprimer la connexion vocale du serveur de la collection
                            voiceConnections.delete(newState.guild.id);
                        }
                    });

                    connection.subscribe(player);

                    // Ajouter la connexion vocale du serveur à la collection
                    voiceConnections.set(newState.guild.id, connection);
                } else {
                    console.error('Le fichier audio n\'existe pas !');
                }
            }
        } catch (error) {
            console.error(error);
        }
    } else if (oldState.channelId && !newState.channelId) {
        // L'utilisateur a quitté le salon vocal
        // Vérifie si le bot est en train de jouer dans ce salon vocal
        const connection = voiceConnections.get(oldState.guild.id);
        if (connection && connection.state.status === VoiceConnectionStatus.Ready) {
            console.log('L\'utilisateur a quitté le salon vocal, fin du vocal');
            connection.destroy();
            voiceConnections.delete(oldState.guild.id);
        }
    }
});

// Pour que les commands fonctionnes

const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`WARNING : La commande au fichier ${filePath} manque une propriété "data" ou "execute".`);
		}
	}
}


// Pour les interactions
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}


client.login(token);