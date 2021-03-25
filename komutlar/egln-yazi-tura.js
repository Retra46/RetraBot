const Discord = require('discord.js');
var TA = [
    "Dik Geldi Cenabet misin ", 
    "Tura",
    "Yazı",
    "Yazı",
    "Yazı",
    "Yazı",
    "Tura",
    "Tura",
    "Tura",
    "Tura",
    "Yazı"
];
module.exports.run = async (bot, message, args) => {
message.channel.send(message.author.toString() + " **Para atıldı** : " + (TA[Math.floor(Math.random() * TA.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazı-tura"],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura atarsın.',
  usage: 'yazı-tura'
};