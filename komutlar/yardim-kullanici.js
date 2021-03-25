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
    .setTitle("**  » RETRA BOT KULLANICI MENÜSÜ  **")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    )
    .setDescription(
      `

                  **•Herhangi bir yardım için rr!davet deyip destek sunucuma gelebilirsin \n Yenilikler için "rr!yenilikler" <:onayy:809839478561570888>**


**<a:olley:809839635768279110> <a:ook:809839623126908969> rr!afk➢AFK kaldığınızı belirten sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!sunucupp➢Sunucunuzun pp sini gösterir✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!istek-bildir➢Herhangi bir isteğinizi bize ileten sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!kaçsunucu➢Botun kaç sunucuda olduğunu gösteren sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!ping➢Pinginizi gösteren sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!say➢Sunucu ile ilgili gerekli bilgileri gösterir✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!çek➢İstediğiniz kişiyi ses kanalına çekmenizi sağlayan sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!yetkilerim➢Sahip olduğunuz yetkileri gösteren sistem✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!çevir➢Bir cümleyi veya kelimeyi çevirmenizi sağlar .✔️

<a:olley:809839635768279110> <a:ook:809839623126908969> rr!sunucubilgi➢Sunucu hakkında bilgileri gösterir .✔️**
`
    )
    .setImage(
      "https://media.giphy.com/media/pGxBEYfTtvRhzWSJpf/giphy.gif"
    );
  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "Botun Komut Listesini Gösterir!",
  usage: "kullanıcı"
};
