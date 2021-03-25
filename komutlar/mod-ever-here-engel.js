const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(` Bu Komutu Kullana Bilmek İçin \Yönetici\` Yetkisine Sahip Olmalısın!`)
  if (!args[0]) return message.channel.send('Hatalı kullanım! **Örnek Kullanım:** rr!everhere-engel aç/kapat')
  
  if (args[0] == 'aç') {
    db.set(`hereengel_${message.guild.id}`, 'acik')
      message.channel.send('**Everyone ve Here Engel Başarılı Bir Şekilde Açıldı.**')
   
  }
  if (args[0] == 'kapat') {
    db.delete(`hereengel_${message.guild.id}`, 'kapali')
      message.channel.send('**Everyone ve Here Engel Başarılı Bir Şekilde kapatıldı.**')
  
  } 

  message.channel.send('**Lüten ``aç`` yada ``kapat`` Yazın!**')
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['everengel','everyoneengel','hereengel'],
  permLevel: 0
};

exports.help = {
  name: 'everhere-engel',
  description: 'everyone ve here yi engeller.',
  usage: 'everhereengelle'
};