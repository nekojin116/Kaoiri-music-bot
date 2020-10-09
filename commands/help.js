const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setColor("ff7500")
        .setThumbnail("http://pm1.narvii.com/6967/2e5907afce1011b281c31260a06f0a1131e5d935r1-644-858v2_uhq.jpg")
        .setTitle("Some fun commands for You: ")
        .setDescription("You can use commands with  ``k!``")
        .addField("**🎵Music🎵**", "_______________")
        .addField("▶️play, 🔎search, ⏭️skip, ⏹️stop, 😀now playing, ⏸️pause, ⏯️resume, ⌚queue, 🎚️volume,")
            .setFooter("made with ❤️ by NEKOJIN116");

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
