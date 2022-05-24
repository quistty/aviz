const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("A ping command that makes the bot reply with pong!"),
  async execute(interaction) {
    await interaction.reply("pong!");
  },
};
