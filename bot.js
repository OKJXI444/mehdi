const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548126311969980431")
setInterval(function() {
channel.send(`هل انت رجل ؟ هل انت بنت ؟`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
