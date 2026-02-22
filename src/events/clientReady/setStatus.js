import { ActivityType } from "discord.js";

export default (client) => {
  client.user.setPresence({
    activities: [
      {
        name: "purrhaps you need docs? 😸",
        type: ActivityType.Playing,
      },
    ],
    status: "playing",
  });
};
