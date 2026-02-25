export default {
  name: "unclearquestion",
  description: "http://idownvotedbecau.se/unclearquestion",
  aliases: ["unclear", "questionunclear"],
  callback: async (client, message, args) => {
    try {
      return message.channel.send(
        "❓ Your question is unclear.\n" +
          "State the goal, context, and expected result clearly.\n" +
          "Clarity = better answers.\n" +
          "http://idownvotedbecau.se/unclearquestion/",
      );
    } catch (err) {}
  },
};
