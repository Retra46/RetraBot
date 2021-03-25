const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    )
    .addField(
      " **<a:kalpp:809839623442006056> Selam, beni buradan davet edebilirsin** ",
      "<:ileri:809839458345418766> [TIKLA]( https://discord.com/oauth2/authorize?client_id=792808791870537729&scope=bot&permissions=805315647)"
    )
    .addField(
      "<a:ayarlar:809839551257247754> Selam burdan destek sunucuma gelebilirsin!",
      "<:ileri:809839458345418766> [TIKLA](https://discord.gg/ygTcFPQu7p)"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/792808791870537729/56ac812def64c48e76ee00fd577ec635.webp"
    );
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Davet linki",
  usage: "Davet Linki"
};
