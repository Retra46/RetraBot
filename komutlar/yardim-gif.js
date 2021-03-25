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
        **•GIF Komutları**

<a:galp:809839492067491891> <a:ook:809839623126908969> **rr!woman➢Kadın GIF atar**

<a:galp:809839492067491891> <a:ook:809839623126908969> **rr!man➢Erkek GIF atar**
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
  name: "gif",
  description: "Botun Komut Listesini Gösterir!",
  usage: "gif"
};
