
console.log('Cargando Bot...!')
var Discord = require('discord.js')
var bot = new Discord.Client();
var fs = require("fs");
var profanities = require("profanities")

bot.on('message', (message) => {

    if (message.channel.type === 'dm') return;


    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = "+"
    
    
    for (x = 0; x < profanities.length; x++) {
        if (msg.includes(profanities[x].toUpperCase())) {
            message.channel.send("Don\'t say that!")
            message.delete();
            return;
        }
    }

    if (msg === prefix + "PING") {
        message.channel.send("pong!")
    }

    

    if ((sender.id == "357500239793618955" || sender.id == "238038678071410689") && sender.id != "423609041583865877" && msg.includes(prefix + "AW")) {
        var archivo = fs.readFileSync("node_modules/profanities/index.json");
        var badword = msg.split(" ");

        var badWords = String(archivo);
        var editarchivo = badWords.split("]") //Archivo final

        console.log(badWords);
        console.log(editarchivo[0]);

        var badwordfinal = badword[1];
        console.log(badword[1]);

        var editfinal = editarchivo[0] + "," + JSON.stringify(badword[1]) + "\n]"
        console.log(editfinal);

        fs.writeFile("node_modules/profanities/index.json", (editfinal), (error) => {
            if (error) console.log(error)});
        message.channel.send("Success!")
    }



    if (sender.id === "423609041583865877") {
        return;
    }

    if (msg.includes("PUTO")) {
        message.channel.send("Puto tu :v")
    }

    
});
bot.on("ready", () => {
    console.log("Listo!")
    bot.user.setUsername("Anti-SwearBot");
});
bot.login("BOT_TOKEN");
