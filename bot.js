const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524671976799862794")
setInterval(function() {
channel.send(`hi  i am the best in this houma i am boyka kabir enta kabir haywan kalbhi hi hi hi hih i hih ih ihih i hih ih ih ihi h ihih ih ih ihihihi hi ihihihihihihihihihihihihihi salut 
sava savavavavavav go to room to goteher plzt tjkqftsk qfjkqsnfos iosjfisjfsifaiiaj aizeariazearetertreyytruqfq`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
