const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC543jaFnMaaK4pY_BWQLv4CyNQ"});

const Command = require('../../cmdModule/commands').Command

class aiCommand extends Command {
	constructor() {
		super({
			name: 'ai',
			help: 'Talk with an AI',
			lhelp: '{text}\n {text} is the text to send to the artificial intelligence assistant.'
		})
	}

	async run(message, args, api) {
		args.splice(0, 1)
		if (!args[0]) {
			api.error('Please provide some text to send to the AI.')
		}
		var arg = args.join(' ');
    clbot.write(arg, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
		return true
	}
}

module.exports = aiCommand