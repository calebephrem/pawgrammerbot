export default {
  name: "noattempt",
  description: "http://idownvotedbecau.se/noattempt/",
  aliases: ["attempt"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "🛠 Show your attempt first.\n" +
          "Explain what you tried and where you're stuck.\n" +
          "We help effort, not untouched problems.\n" +
          "http://idownvotedbecau.se/noattempt/",
      );
    } catch (err) {}
  },
};
