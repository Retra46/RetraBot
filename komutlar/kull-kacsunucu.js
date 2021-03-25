const Discord = require("discord.js")////retra
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();

    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.setColor('RANDOM')
      embed.setTitle('<a:qrall:809839561215311943> Sunucular')
      embed.setDescription(`<a:onaytik:809839623299661834> **${bot.guilds.cache.size}** tane sunucu beni eklemiş !`)
    }
    message.channel.send({embed: embed});////retra
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kacsunucu'],
  permLevel: 4,
};

exports.help = {
  name: "kaçsunucu",
  description: "Botun kaç sunucuda olduğunu gösterir",
  usage: "kaçsunucu"
};