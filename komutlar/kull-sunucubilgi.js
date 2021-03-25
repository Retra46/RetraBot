const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()

    .setAuthor("Retra | Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")
    .addField("✨Sunucunuzun İsmi", message.guild.name)
    .addField("✨Sunucunuzun İdsi", message.guild.id)
    .addField("✨Sunucunuzun Bölgesi", message.guild.region)
    .addField("✨Sunucunuzun Roller:",message.guild.roles.cache.map(role => role.name).join(", "),true)
    .addField("✨Sunucunuzun Oluşturma tarihi:", message.guild.createdAt, true)
    .addField("✨Sunucunuzun AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField("✨Sunucunuzun AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField("✨Sunucunuzun Oluşturulma tarihi:", message.guild.createdAt, true)
    .addField("✨Sunucunuzdaki Roller:",message.guild.roles.cache.map(role => role.name).join(", "),true)
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());

  return message.channel.send(motion);
};

module.exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};