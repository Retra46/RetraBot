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

**<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!rol-ver➢İstediğiniz bir rolü verirsiniz

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!rol-al➢İstediğiniz rolü alırsınız

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!roller➢Sunucunuzdaki rolleri gösterir     

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!sil➢Mesajları silersiniz             

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!istatistik➢Botun istatiklerini gösterir 

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!nuke➢Kanalı patlatıp bütün mesajları silen sistem

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!oylama➢Oylama yapmanızı sağlayan sistem

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!reklam-taraması➢Reklam taramsı yapmanızı sağlayan sistem

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!lock➢Kanalı kilitlersiniz

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!unlock➢Kanalın kilidini açarsınız

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!bansistemi➢Kullanıcıları banlarsınız 

<a:bakm:809839453958045806> <a:ook:809839623126908969> rr!sa-as➢Sa-as sistemini ayarlarsınız**

`
    )
    .setImage("https://media.giphy.com/media/pGxBEYfTtvRhzWSJpf/giphy.gif");

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Botun Komut Listesini Gösterir!",
  usage: "moderasyon"
};
