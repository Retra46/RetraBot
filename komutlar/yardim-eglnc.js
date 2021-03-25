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
    .setTitle("**  » RETRA BOT  **")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    )
    .setDescription(
      `

        **•Eğlence Komutları**

**<a:uvj:809839623357726740> <a:ook:809839623126908969> **rr!aşkölçer➢Aşk yüzdenizi ölçer **

**<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!balıktut➢Balık tutarsınız 

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!banner➢İstediğiniz birşeyi yazdırırsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!çalış➢Çalışarak para kazanırsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!düello➢Birisi ile vs atarsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!ilginçbilgi➢Size ilginç bilgi gösterir

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!profil➢Kaç paranız olduğuna bakarsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!şanslısayım➢Şanslı sayınızı gösterir

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!slots➢Slots çevirirsiniz

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!vine➢Size vine gösterir

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!wasted➢Profil fotoğrafınızda wasted yazar

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!yazan-kazanır➢Birisi ile yazan kazanır oynarsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!yumruk-at➢Birisine yumruk atarsınız

<a:uvj:809839623357726740> <a:ook:809839623126908969> rr!yazı-tura➢Yazı tura oynarsınız**
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
  name: "eğlence",
  description: "Botun Komut Listesini Gösterir!",
  usage: "eğlence"
};
