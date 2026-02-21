import { ActivityType } from "discord.js";

export default (client) => {
  client.user.setPresence({
    activities: [
      {
        name: "i meow you",
        type: ActivityType.Playing,
      },
    ],
    status: "playing",
  });
};
