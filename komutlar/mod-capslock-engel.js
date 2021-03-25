const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu Komutu Kullana Bilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın!`)
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(`**Capslock Engel Başarılı Bir Şekilde Aktif Edildi** <a:onayytikk:811491281883627532>`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(`**Capslock Engel Başarılı Bir Şekilde Kapatıldı** <a:onayytikk:811491281883627532>`)
return
}
     message.channel.send('Lüten ``aç`` yada ``kapat`` Yazın!') 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel','capslock','capslock-engel','cl','caps-engel'],
  permLevel: 0
};
exports.help = {
  name: 'capsengel',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engel'
};