const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let count = 0;
  let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  let textChannels = message.guild.channels.cache.filter(m => m.type == "text")
    .size;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  let çevrimiçi = message.guild.members.cache.filter(
    m => !m.user.bot && m.user.presence.status !== "offline"
  ).size;
  const infinity = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      ` <a:onaytik:809839623299661834> **Sunucudaki Toplam Üye Sayısı**`,
      `<a:ilerii:809839623890141194> **${message.guild.memberCount}**`
    )
    .addField(
      ` <a:onaytik:809839623299661834> **Toplam Çevrimiçi Üye Sayısı**`,
      `<a:ilerii:809839623890141194> **${çevrimiçi}**`
    )
    .addField(
      ` <a:onaytik:809839623299661834> **Yazı Kanalları**`,
      `<a:ilerii:809839623890141194> **${textChannels}**`
    )
    .addField(
      ` <a:onaytik:809839623299661834> **Ses Kanalları**`,
      `<a:ilerii:809839623890141194> **${voiceChannels.size}**`
    )
    .addField(
      ` <a:onaytik:809839623299661834> **Seslideki Üye Sayısı**`,
      `<a:ilerii:809839623890141194> **${count}**`
    ).setTitle(`<a:elmas:809839474161876992> ${message.author.tag} - Tarafından Kullanıldı`);
  message.channel.send(infinity);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Say",
  usage: "say"
};
