const Discord = require("discord.js");
exports.run = async (client, message, args) => {

if (message.channel.type === "dm") {
message.channel.send("Bu Komutu Özelden Kullanamazsın")
 return }

if (!message.guild.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS")) {
message.reply(`Botun Ban Yetkisi Yok!.`)
return
 }
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Yetkin Yok')

let banlanacak = message.mentions.members.first()
let sebep = args.slice(1).join(' ') || 'Banlanma Sebebi Belirtilmemiş'

if(!banlanacak) return message.channel.send('Banlanacak Kişiyi Belirtiniz?.')
message.guild.members.ban(banlanacak, { reason: sebep});
message.channel.send(`**Banlandın eZ GG** <a:onayytikk:811491281883627532>`)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'ban',
  description: 'ban',
  usage: 'ban'
};