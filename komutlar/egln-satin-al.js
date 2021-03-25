const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  var para = db.fetch(`${message.author.id}_para`);

  if (para > 500) {
    const sj = new Discord.MessageEmbed()
      .setColor(0xffd100)
      .setTitle("Merket")
      .setDescription(`Başarıyla para harcadınız  ${para}`)
      .setTimestamp();
    db.add(`${message.author.id}_araba`, `1`);
    db.add(`${message.author.id}_para`, `-500`);
    message.channel.send(sj);
  }


};

module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "satın-al",
  description: "pat pat",
  usage: "satın-al"
};
