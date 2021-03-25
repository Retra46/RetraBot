const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var bot = "799282682890420275";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "🟡Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!🟡"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.get(args[0]) ||
    message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.send(
      "🟡Herkese rol verebilmem için bir rol etiketlemelisin.🟡"
    );

  const embed = new Discord.MessageEmbed()
    .setDescription(`🟡Herkese ${rol} adlı rol verildi!🟡`)
    .setColor(rol.hexColor);

  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
  });
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkese-rol-ver"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "herkese-rol-ver",
  description: "Sunucudaki kullanıcılara toplu olarak rol verir.",
  usage: "toplu-rol-ver <@rol>"
};
