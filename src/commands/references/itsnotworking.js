export default {
  name: "itsnotworking",
  description: "http://idownvotedbecau.se/itsnotworking/",
  aliases: ["notworking", "doesntwork"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "⚠️ “It’s not working” isn’t enough.\n" +
          "Explain what you expected, what happened, and the exact error.\n" +
          "Details help us debug.\n" +
          "http://idownvotedbecau.se/itsnotworking/",
      );
    } catch (err) {}
  },
};
