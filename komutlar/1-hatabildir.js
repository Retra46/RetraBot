const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('** <a:krmztik:809839622925844514> Doğru Kullanım <a:krmztik:809839622925844514> : rr!hata-bildir <bulduğunuz hata> **')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('**<a:onayytikk:811491281883627532> Botta Bulduğunuz Hata Başarıyla Bildirildi.<a:olley:809839635768279110>\n <a:olley:809839635768279110> En Yakın Zamanda Hata Report Kanalından Cevap Vereceğiz!**')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Botta Bulduğu Hata ;**`)

.addField(`<a:ilerii:809839623890141194> **Gönderen Kişinin Bilgileri ;**`, `<a:isimsiz:811491360321568769> Kullanıcı İd : ${message.author.id}\n <a:isimsiz:811491360321568769> Kullanıcı Adı : ${message.author.username}\n<a:isimsiz:811491360321568769> Kullanıcı Tagı : ${message.author.discriminator}`)
.addField("<a:kitap:810846093800636507> **Gönderilen Hata/Bug Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('823147870592172033').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir","hatabildir"],
    permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'Botta bulduğunuz hatayı belirtilen kanala bildirir.',
    usage: 'hata'
}