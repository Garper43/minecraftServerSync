import * as dotenv from 'dotenv';
import config from './config.json' assert { type: 'json' };
import fs from 'fs';
import fetch from "node-fetch";
import Discord, { GatewayIntentBits } from "discord.js";
import { exec } from 'child_process';
const client = new Discord.Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });
const prefix = "s/";
var flashName = false;
dotenv.config();

client.login("" + process.env.TOKEN);

client.on("ready", () => { 
    
});

var yourscript = exec ('start cmd.exe /k "cd ../server/ & server.bat"', //start cmd.exe /k opens a new terminal and runs cd ../server/ & server.bat inside it
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    }
);

var guild = await client.guilds.fetch("978886799810232320").then((value) => {
    return value;
});
var channel = await guild.channels.fetch("1051392094926811157").then((value) => {
    return value;
});
channel.send("Server started on IP: " + config.ip + "\nif I(ServerBot) am offline, so is the server")

// client.on("messageCreate", (msg) => {
//     var args = getArguments(msg.content);

//     if(args[0] == prefix + "startOutput") {
//         commands.ass(msg, args);  
//     } else if(args[0] == prefix + "stopOutput") {
//         commands.ass(msg, args);  
//     }
// }



//process.exit();