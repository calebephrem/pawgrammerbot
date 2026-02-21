import "dotenv/config";
import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default {
  name: "askai",
  description: "Ask Groq Ai Model",
  aliases: ["ai", "dontasktoaskjustask"],
  callback: async (client, message, args) => {
    try {
      if (message.author.bot) return;
      await message.react("👀");
      await message.channel.sendTyping();

      const question = args.join(" ");

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Answer the following question concisely:\n${question}`,
          },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.8,
        max_completion_tokens: 640,
        top_p: 1,
        stream: true,
        stop: null,
      });

      let answer = "";
      for await (const chunk of chatCompletion) {
        answer += chunk.choices[0]?.delta?.content || "";
      }
      await message.channel.send(answer);
    } catch (err) {
      console.log(err);
    }
  },
};
