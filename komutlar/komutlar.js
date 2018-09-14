
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setAuthor("Beinz Bot | Komutlar")
const asdasd = new Discord.RichEmbed()
.setColor(0xFFFFFF)
.addField(':bird: **!parrotgif**', "Komutu kullanınca size Papağan gifi gönderir.", true)
.addField(':cat: **!catgif**', "Komutu kullanınca size Kedi gifi gönderir.", true)
.addField(':frog: **!froggif**',"Komutu kullanınca size Kurbağa gifi gönderir.", true)
.addField(':penguin: **!penguingif**',"Komutu kullanınca size Penguen gifi gönderir.", true)
.addField(':monkey: **!monkeygif**',"Komutu kullanınca size Maymun gifi gönderir.", true)
.addField(':gift: **!bangif**',"Komutu kullanınca size Ban gifi gönderir.", true)
.addField(':fireworks: **!avatar**',"Komutu kullanınca kendinize ait avatarınızı gönderir.", true)
.addField(':desktop: **!sunucubilgi**',"Kendi sunucununuzun bilgilerini gönderir.", true)
.addField(':boom: **!botbilgi**',"Komutu kullanınca Bot bilgilerini gönderir.", true)
.addField(':dog: **!doggif**', "Komutu kullanınca size Köpek gifi gönderir.", true)
return  message.channel.sendEmbed(asdasd);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'komutlar',
description: 'komutlar',
usage: 'komutlar'
};