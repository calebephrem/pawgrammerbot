export default {
  name: "xyproblem",
  description: "https://xyproblem.info/",
  aliases: ["xyp", "xy-problem"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "🧩 This might be an XY problem.\n" +
          "Explain your actual goal, not just the solution you're trying.\n" +
          "Give full context for better answers.\n" +
          "https://xyproblem.info/",
      );
    } catch (err) {}
  },
};
