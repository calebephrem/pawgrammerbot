export default {
  name: "xyproblem",
  description: "https://xyproblem.info/",
  aliases: ["xyp", "xy-problem"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send("https://xyproblem.info/");
    } catch (err) {}
  },
};
