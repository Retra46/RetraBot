const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Retra BOT", client.user.avatarURL())
    .addField("<a:ayarlar:809839551257247754> **<a:isimsiz:811491360321568769> Botun Sahibi**", "<@739898889603383376>")
  
  
  .addField("<a:ayarlar:809839551257247754> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  
  .addField("<a:ayarlar:809839551257247754> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  
  .addField("<a:ayarlar:809839551257247754> **Çalışma süresi**", seksizaman, true)
  
  .addField("<a:ayarlar:809839551257247754> **Node.JS sürüm**", `${process.version}`, true)
  
  .addField("<a:ayarlar:809839551257247754> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};