const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);  
    client.user.setActivity("?help - By Natrix");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
    client.user.setStatus('online'); //dnd, invisible, online, idle
});
const ranking = require("./ranking");         //load the ranking file
ranking(client);                              //call the ranking file with the client
client.login(process.env.TOKEN);

