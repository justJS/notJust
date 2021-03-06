const Discord = require('discord.js')
const Command = require('../../cmdModule/commands').Command

class aboutCommand extends Command {
  constructor() {
    super({
      name: 'about',
      help: 'Get bot info'
    })
  }
  
  hasPermission(message) {
    var check = require('../../cmdModule/perms').blacklistCheck(message.client.settings.get('global').blacklistedUsers,message.author.id)
    if (check) return false
    return true
  }

  async run(message, args, api) {
    //message.delete()
    //api.evalembed([245, 236, 71], "🏓 `Ping Successful`", "Heartbeat", one, "Ping", two)
    var servers = message.client.guilds.size
    var channels = message.client.channels.size
    var users = message.client.users.size
    //let online   = this.client.users.filter(u => u.status != "offline").length;
    let embed = new Discord.RichEmbed()
    //embed.setTimestamp()
    embed.setTitle('<:apple_symbol_info:359559750096257024> `About notJust`')
    embed.setColor('#00ff00')
    //embed.setFooter('Replying to: ' + this.message.author.tag)
    //embed.setTimestamp()
    embed.setFooter('Replying to ' + message.author.tag)
    embed.setDescription('[notJust](https://notjust.xyz) is a leading, state-of-the-art Discord bot founded by dotJS. \nIt has modules which include fun commands, music commands, moderation commands, and more.')
    embed.addBlankField(false)
    embed.addField('`Get`', '**[Get notJust by clicking here.](https://discordapp.com/oauth2/authorize?client_id=329772339967426560&scope=bot&permissions=8)** \nWe highly recommend you give it the "Administrator" permission to ensure all commands work!', false)
    embed.addField('`Stats`', 'notJust is on ' + servers + ' servers, which contain ' + channels + ' channels, and ' + users + ' users.', false)
    

    if (message.guild && (message.client.settings.get(message.guild.id).isDonator == true || message.author.id == require('../../config.json').owner)) {} else {
      embed.addBlankField(false)
      embed.addField('`Premium`', 'notJust Premium is an upgrade to notJust that adds commands and modules. Find out more by doing `.premium` in the chat!', false)
      //embed.addBlankField(false)
    }


    //embed.addField('`Description`', 'notJust is a leading, state-of-the-art Discord bot founded by dotJS. \nIt has modules which include fun commands, music commands, moderation commands, and more.', false)		
    //embed.addField('`Contributors`', 'notJust couldn\'t have been built without the assistance of `King - Vlad` and `szymex73`, so thanks for all their help.', false)
    message.channel.send({
      embed
    })
    return true
  }
}

module.exports = aboutCommand
