const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {

var zhacke = slots[Math.floor(Math.random() * slots.length)];
var zhacke2 = slots[Math.floor(Math.random() * slots.length)];
var zhacke3 = slots[Math.floor(Math.random() * slots.length)];

  if (zhacke === zhacke2 && zhacke3 === zhacke) { return message.channel.send(stripIndents`**Kazandın  ** \n\n${zhacke} **:** ${zhacke2} **:** ${zhacke3}`);

  } else {
   return message.channel.send(stripIndents`**Kaybettin xD* \n\n${zhacke} **:** ${zhacke2} **:** ${zhacke3}**`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};