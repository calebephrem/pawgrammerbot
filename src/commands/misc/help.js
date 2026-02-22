import path, { join } from "path";
import { fileURLToPath } from "url";
import getAllFiles from "../../utils/getAllFiles.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  name: "help",
  description:
    "Provides information about available commands and how to use them.",
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: (client, interaction) => {
    const prefixCommandsPath = join(__dirname, "..", "..", "commands");

    const prefixCommandsCategories = getAllFiles(prefixCommandsPath, true);
    let helpText;

    await(async () => {
      const categoriesData = await Promise.all(
        prefixCommandsCategories.map(async (category) => {
          const categoryName = path.basename(category);
          const commandFiles = getAllFiles(category).filter(
            (file) => !file.endsWith("help.js"),
          );
          const commands = await Promise.all(
            commandFiles.map(async (file) => {
              let rel = path.relative(__dirname, file).replace(/\\/g, "/");
              if (!rel.startsWith(".")) rel = "./" + rel;
              const cmd = await import(rel);
              return cmd;
            }),
          );
          const commandsInCategory = commands.map(
            (cmd) => `\`${cmd.default.name}\`: ${cmd.default.description}`,
          );
          return `**${categoryName}**\n${commandsInCategory.join("\n")}`;
        }),
      );
      helpText = `Usage:\n\n\`++[cmd]\`\n\`?[cmd]\`\n\nAvailable Commands:\n\n${categoriesData.join("\n\n")}`;
      // console.log(helpText);
    })();

    const embed = new EmbedBuilder()
      .setTitle("📘 Commands Guide")
      .setDescription(helpText.trim() || "No commands available.")
      .setColor(0x5865f2)
      .setFooter({
        text: `Requested by ${interaction.user.tag} • PawgrammerBot`,
        iconURL: interaction.user.displayAvatarURL(),
      });
    return interaction.reply({ embeds: [embed] });
  },
};
