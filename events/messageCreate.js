const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        var content = message.content.toLowerCase();
        var content_split = content.split(' ');

        async function reponse(messageTab, reponseTab){
            if(messageTab.includes(content_split[content_split.length-1]) || messageTab.includes(content_split[content_split.length-2])){
                await message.reply(reponseTab[~~(Math.random() * reponseTab.length)]).catch(console.error);
            };
        };

        await reponse(['koi',"quoi","kwa"], ["feur", "feuse", "dricépce"]);
        await reponse(['ouai','oé','oe','ouais'],['jdène',"sterne"])
        await reponse(['oui','ui'],["stiti","fi"])
        await reponse(['hein','1'],['2'])
        await reponse(['de','deux','2'],['3'])
        await reponse(['troyes','trois','troi','3'],['soleil !'])
        await reponse(['comment'],['taire'])
        await reponse(['nan'],['cy'])
        await reponse(['ah','a'],['b'])
        await reponse(['b','beh','bé'],['c'])
        await reponse(["c'est",'c','ces','ses'],['d'])
        await reponse(["des","d","dée","dee"],["Ton pantalon"])
        await reponse(["feur","feure"],["rouge"])
        await reponse(["bas","ba","bah"],["llon"])
        await reponse(['pd'],['f'])
        await reponse(['mais'],['on'])
        await reponse(['faladon'],['Le meilleurs prof','Faker en est jaloux','Le meilleurs des ratio sur LoL'])
    }};