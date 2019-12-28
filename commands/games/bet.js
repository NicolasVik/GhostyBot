const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  message.delete().catch(O_o => {});

  try {
    let member = message.mentions.members.first();
    let embed;

    if (member) {
      if (Math.random() < 0.5) {
        embed = new Discord.RichEmbed()
          .setTitle(
            message.author.username + " bets on " + member.user.username
          )
          .setColor("#0000FF")
          .setDescription(
            message.author.username +
              " bet on " +
              member.user.username +
              "!\n" +
              message.author.username +
              " didn't win the bet!"
          );
      } else {
        embed = new Discord.RichEmbed()
          .setTitle(
            message.author.username + " bets on " + member.user.username
          )
          .setColor("#0000FF")
          .setDescription(
            message.author.username +
              " bet on " +
              member.user.username +
              " and won the bet!"
          )
          .setFooter(message.author.username, message.author.displayAvatarURL);
      }
    } else message.reply("You need to mention the person you want to bet on!");

    message.channel.send(embed);
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }
  console.log(`${message.author.username} used the bet command`);
};

// exports.conf = {
//   enabled: true,
//   aliases: [],
//   guildOnly: false,
//   permLevel: 'User'
// };

exports.help = {
  name: "bet",
  category: "Fun",
  description: "Bets on a member.",
  usage: "bet <member>"
};
