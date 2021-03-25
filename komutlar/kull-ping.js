const Discord = require("discord.js");

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("<a:isimsiz:811491360321568769> Ping Değerleri")
    .addField("<a:isimsiz:811491360321568769> Ping Gecikmesi:", `**${client.ws.ping}** ms`);
  message.channel.send(embed);
};
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
};
