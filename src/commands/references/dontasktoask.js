export default {
  name: "dontasktoask",
  description: "dontasktoask.com",
  aliases: ["ask", "dontasktoaskjustask"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "❌ Don’t ask to ask.\n" +
          "No “can someone help?” or asking for DMs.\n" +
          "Just ask your full question with context.\n" +
          "https://dontasktoask.com/",
      );
    } catch (err) {}
  },
};
