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
      .setColor(0x000000)
      .setAuthor("Beinz Bot | Bilgiler" ,message.guild.iconURL)
      .addField(':white_check_mark: **Bot Adı:**', client.user.username)
      .addField(':zap: **Toplam Sunucu:**', client.guilds.size.toLocaleString ())
      .addField(':rainbow: **Toplam Kanal:**', client.channels.size.toLocaleString())
      .addField(':flag_white: **Toplam Kullanıcı:**',client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'botbilgi',
  usage: 'botbilgi'
};
