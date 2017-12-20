const Discord = require('discord.js');
const Command = require('../../cmdModule/commands').Command
const shop = require('../../shop.json')

class shopCommand extends Command {
  constructor() {
    super({
      name: 'shop',
      help: 'View the gold bar shop'
    })
  }

  hasPermission(message) {
   if (message.guild && message.guild.id == '268970339948691456') return true
    return false
  }

  async run(message, args, api) {
      let embed = new Discord.RichEmbed()
      embed.setTitle('<:goldbar:383480100282171392> `Shop Listing`')
      embed.setColor('#00ff00')
      embed.setFooter('Replying to ' + message.author.tag)
      embed.setDescription(String.fromCharCode(8203))
      message.channel.send({
        embed
      })
    return true
  }
}

module.exports = shopCommand
