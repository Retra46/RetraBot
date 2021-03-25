const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const EmbedCrewCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  » RETRA BOT YENİLİKLER  **")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    )
    .setDescription(
      ` 
<a:duyuru:809839623797997568> **YENİLİKLER** <a:duyuru:809839623797997568>
Tarih = 19/02/2021

***<a:elmas:809839474161876992> Ayarlamalı sa-as sistemi 
<a:elmas:809839474161876992> Ayarlamalı emoji koruma sistemi ***

 `
    )
    .setImage("https://media.giphy.com/media/pGxBEYfTtvRhzWSJpf/giphy.gif");

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilikler"],
  permLevel: 0
};

exports.help = {
  name: "yenilikler",
  description: "Botun Komut Listesini Gösterir!",
  usage: "yenilikler"
};
