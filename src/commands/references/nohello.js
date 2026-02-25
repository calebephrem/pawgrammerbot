export default {
  name: "nohello",
  description: "nohello.net",
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "👋 Skip the “hi/hello”.\n" +
          "Ask your full question in one message.\n" +
          "More context = faster help.\n" +
          "https://nohello.net/",
      );
    } catch (err) {}
  },
};
