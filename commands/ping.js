const Command = require("../events/message.js");
const { MessageEmbed } = require('message.js')

module.exports = {
    info: {
        name: "ping",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["ms", "ping", "pong"]
    },

    run: async function(client, message, args){
        var allcmds = ""
        
class Ping extends Command {
  constructor (client) {
    super(client, {
      name: "ping",
      description: "Latency and API response times.",
      usage: "ping",
      aliases: ["pong"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const msg = await message.channel.send("🏓 Ping!");
      msg.edit(`🏓 Pong! (Roundtrip took: ${msg.createdTimestamp - message.createdTimestamp}ms. 💙: ${Math.round(this.client.ws.ping)}ms.)`);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ping;
