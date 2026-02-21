import "dotenv/config";
import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default {
  name: "askai",
  description: "Ask Groq Ai Model",
  aliases: ["ai"],
  callback: async (client, message, args) => {
    try {
      if (message.author.bot) return;
      await message.channel.sendTyping();

      const question = args.join(" ");

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Answer the following question concisely **only if it is related to tech, coding, development, or programming**. If it is not, simply reply: "I cannot provide an answer for this question because it is not related to tech, coding, development, or programming."\n${question}`,
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
