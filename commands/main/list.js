const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('lists all users in the voice channel this message was sent from'),
	async execute(interaction) {
		if (!interaction.member.voice.channel) {
            await interaction.reply('User is not in a voice channel.');
        } else {
            const channelMembers = interaction.member.voice.channel.members;
            let replyString = "Currently in the voice channel:";
            channelMembers.forEach((member) => {
                replyString += `\n${member.user.username}, User ID: ${member.user.id}`;
            });

            await interaction.reply(replyString);
        };
	},
};