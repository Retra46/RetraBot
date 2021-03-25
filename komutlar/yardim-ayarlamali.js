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
    .setTitle("**  » RETRA BOT MODERASYON MENÜSÜ  **")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    )
    .setDescription(
      `


        **•Herhangi bir yardım için rr!davet deyip destek sunucuma gelebilirsin \n Yenilikler için "rr!yenilikler" <:onayy:809839478561570888>**

**<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!mod-log➢Mod logunu ayarlarsınız

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!küfür-engel➢Küfür engel sistemini    

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!reklam-engel➢Reklam engellersiniz    

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!everhereengel➢Everyone ve here etiketlerinin kullanımının yasaklanmasını sağlar

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!emoji-koruma➢Emoji koruma sistemini ayarlarsınız

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!kanal-koruma➢Kanalların silinmesini engeller

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!capslock-engel➢Büyük harf yazımını engellersiniz**

`
    )
    .setImage("https://media.giphy.com/media/pGxBEYfTtvRhzWSJpf/giphy.gif");

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlar","ayarlamalı"],
  permLevel: 0
};

exports.help = {
  name: "ayarlamalı",
  description: "Botun Komut Listesini Gösterir!",
  usage: "ayarlamalı"
};
