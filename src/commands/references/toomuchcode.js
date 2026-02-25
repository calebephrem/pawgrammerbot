export default {
  name: "toomuchcode",
  description: "http://idownvotedbecau.se/toomuchcode/",
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "📦 Don’t dump massive code.\n" +
          "Send a minimal reproducible example.\n" +
          "Only include what’s necessary.\n" +
          "http://idownvotedbecau.se/toomuchcode/",
      );
    } catch (err) {}
  },
};
