const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
require("./util/eventLoader.js")(client);
const moment = require("moment");
const Jimp = require("jimp");
const ayarlar = require("./ayarlar.json");
const db = require("quick.db");
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`...`);
  console.error("---");

const ayarlar = require("./ayarlar.json")

const { Player } = require("discord-music-player")
const player = new Player(client);
client.player = player;
  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

let prefix = ayarlar.prefix;

console.log("Bot  Sayesinde Aktif");
console.log("");
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Komut Var! | discord.gg/maximusboys `);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) return message.author.send("**Beni Sunucuda Deneyin**");
  let permlvl = 0;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//////////READY/////////////

//------------------Emoji Koruma---------------------------\\

client.on("emojiDelete", async (emoji, message) => {
  
  let kanal = await db.fetch(`emotek_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
    
   let embbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Bir Emoji Silindi`)
   .setDescription(`Silinen Emoji: ${emoji.name}, Emoji Koruma Sistemi Açık Olduğundan Tekrar Eklendi!`)
   message.client.channels.cache.get(kanal).send(embbed)
  
  }

});
////////////////saas///////////
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Hoşgeldin');      
      } 
      }
    });
////////////////////////
client.on("message", msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
});

/////link engel///////////
client.on("message", async msg => {
  if (msg.author.bot) return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "https://",
      "http://",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf",
      ".gd",
      ".az",
      ".party",
      ".gf"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          return msg.channel
            .send(
              `${msg.author.tag}, **Reklam Yapmak Yasak!**,**Bidaha olursa alırım dalağını!!<a:banned:809839456307773461>**`
            )
            .then(msg => msg.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
//// küfür engel// //küfür engel başlangıç//
const küfür = [
  "siktir",
  "fuck",
  "puşt",
  "pust",
  "piç",
  "sikerim",
  "sik",
  "yarra",
  "yarrak",
  "amcık",
  "orospu",
  "orosbu",
  "orosbucocu",
  "oç",
  ".oc",
  "ibne",
  "yavşak",
  "bitch",
  "dalyarak",
  "amk",
  "awk",
  "taşak",
  "taşşak",
  "daşşak",
  "sikm",
  "sikim",
  "sikmm",
  "skim",
  "skm",
  "sg"
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
    if (i) {
      if (küfür.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#ff7e00")
          .setDescription(
            `${nev.author} , **Mesajını Editleyerek Küfür Etmeye Çalıştı!**`
          )
          .addField("Küfür:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#ff7e00")
          .setDescription(
            `${nev.author} , **Mesajı Editleyerek Küfür Etmene İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
  if (i) {
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 750 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#ff7e00")
            .setDescription(
              ` <@${msg.author.id}> , **Küfür etmemelisin yoksa alırlar dalağını!**`
            );
          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#ff7e00")
            .setDescription(` ${msg.author} , **Küfür Etmeye Çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//KanalKoruma

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = z.guild.channels.find(c => c.name === z.name);
      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});
//////ever-here-engel///////////////
client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.permissions.has("ADMINISTRATOR")) {
        msg.delete();
        return msg
          .reply(" **Everyone ve Here Etiketlemek Yasak.**")
          .then(nordx => nordx.delete({ timeout: 5000 }));
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

/////////capslock-engel////////////
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`${msg.member}, **Capslock Kapat Lütfen.**`)
              .then(nordx => nordx.delete({ timeout: 5000 }));
          }
        }
      }
    }
  }
});
////////////oto-cevap/////////////////
client.on("message", async message => {
  if (message.author.bot) return;
  let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`);
  let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`);
  var efe = "";
  let sunucuadı = message.guild.name;
  let üyesayı = message.guild.members.cache.size;
  for (
    var i = 0;
    i <
    (db.fetch(`${message.guild.id}.otocevap.yazılar`)
      ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length
      : 0);
    i++
  ) {
    if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
      efe += `${cevaplar[i]
        .replace("{Retra Boys}", `${sunucuadı}`)
        .replace("{üyesayı}", `${üyesayı}`)}`;
      message.channel.send(`${efe}`);
    }
  }
});

/////////////modlog//////////////////
client.on("channelCreate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal oluşturuldu`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );
  c.send(embed);
});

client.on("channelDelete", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  let embed = new Discord.MessageEmbed()
    .addField(
      `Kanal silindi`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n��� ID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );

  c.send(embed);
});

client.on("channelNameUpdate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal İsmi değiştirildi`,
      ` Yeni İsmi: \`${channel.name}\`\n► ID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );
  c.send(embed);
});

client.on("emojiCreate", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji oluşturuldu`,
      ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL
    );

  c.send(embed);
});
client.on("emojiDelete", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji silindi`,
      ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL
    );

  c.send(embed);
});
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${newEmoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji güncellendi`,
      ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`,
      newEmoji.client.user.avatarURL
    );

  c.send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcı banlandı`,
      ` İsmi: \`${user.username}\`\n ID: **${
        user.id
      }**\n Sebep: **${entry.reason || "Belirtmedi"}**\n Banlayan: **${
        entry.executor.username
      }#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL
    );

  channel.send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcının banı açıldı`,
      ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL
    );

  channel.send(embed);
});
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  const channel = message.guild.channels.cache.get(
    db.fetch(`codeminglog_${message.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL
    )
    .setTitle("Mesaj silindi")
    .addField(
      `Silinen mesaj : ${message.content}`,
      `Kanal: ${message.channel.name}`
    )
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${message.client.user.username}#${message.client.user.discriminator}`,
      message.client.user.avatarURL
    );

  channel.send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (oldMessage.content == newMessage.content) return;

  const channel = oldMessage.guild.channels.cache.get(
    db.fetch(`codeminglog_${oldMessage.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ", `${oldMessage.content}`)
    .addField("Yeni mesaj : ", `${newMessage.content}`)
    .addField("Kanal : ", `${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      `${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,
      `${oldMessage.client.user.avatarURL}`
    );

  channel.send(embed);
});

client.on("roleCreate", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`codeminglog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL
    );

  channel.send(embed);
});

client.on("roleDelete", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`codeminglog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL
    );

  channel.send(embed);
});

/////////tepki ekleme/////////////////
client.on("message", message => {
  if (message.channel.id !== "KANAL İDSİ") return;

  message.react(":715519364853661747:");
  message.react(":B_Pikachu:");
});
////////ses///////////





////////////çekiliş 




client.login(process.env.TOKEN);
