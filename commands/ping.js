module.exports.run = async(client, message, args) => {
    const embed = await message.channel.send(` \`🏓 Pong!\` `);
    embed.edit(`
  \`💻 Ping do servidor:\` \`${embed.createdTimestamp -
        message.createdTimestamp}ms\`
  \`⏰ Ping da API:\` \`${Math.round(
        client.ws.ping
      )}ms\``);
  }