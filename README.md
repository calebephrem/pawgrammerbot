# 🐾 Pawgrammer Bot

Pawgrammer is DevHub’s **documentation, AI, references, and news bot**.  
It helps contributors stay informed, learn faster, and access curated resources, all through simple **prefix commands**.

## ✨ Features

- **AI-powered Q&A** → `++askai` (alias: `++ai`)  
  Get quick answers, explanations, or brainstorming help from an integrated AI assistant.

- **Developer Articles** → `++articles` (alias: `++devto`)  
  Fetch fresh posts from [dev.to](https://dev.to) to stay up-to-date with developer insights.

- **MDN Docs** → `++mdn` (alias: `++mozilla`)  
  Instantly retrieve authoritative documentation from [MDN Web Docs](https://developer.mozilla.org).

- **Tech News** → `++news` (alias: `++devnews`)  
  Pull the latest headlines from [NewsAPI](https://newsapi.org) to keep the community informed.

- **Community References**
  - `++dontasktoask` (alias: `++ask`) → [Don’t Ask to Ask](https://dontasktoask.com)
  - `++nohello` → [No Hello](https://nohello.net)
  - `++rules` → DevHub’s community rules
  - `++tos` → Discord’s Terms of Service

## 📖 Usage

All commands are **prefix-only**.  
Use either `++[cmd]` or `?[cmd]` (without brackets).

### Examples

```text
++ai What’s the difference between npm and yarn?
++mdn WeakMap
++news
++dontasktoask
++rules
```

## 🛠️ Commands Overview

| Command        | Aliases     | Prefix Example       | Description                               |
| -------------- | ----------- | -------------------- | ----------------------------------------- |
| `askai`        | `ai`        | `++ai [query]`       | Ask the AI anything—technical or general. |
| `articles`     | `devto`     | `++articles [topic]` | Fetch dev.to articles by topic.           |
| `mdn`          | `docs`      | `++mdn [query]`      | Search MDN documentation.                 |
| `news`         | `headlines` | `++news`             | Get latest developer/tech news.           |
| `dontasktoask` | `ask`       | `++dontasktoask`     | Show the “Don’t Ask to Ask” reference.    |
| `nohello`      | `hello`     | `++nohello`          | Show the “No Hello” reference.            |
| `rules`        | —           | `++rules`            | Display DevHub’s community rules.         |
| `tos`          | —           | `++tos`              | Display Discord’s Terms of Service.       |

## 🗺️ Roadmap

Pawgrammer is evolving to cover more documentation and references. Planned additions include:

- **Expanded Documentation Sources**
  - Add support for [discord.js](https://discord.js.org) docs (`++djs`)
  - Add more language/framework docs (e.g., Python, Rust, Go)

- **Community Resources**
  - More cultural references (e.g., “XY Problem” guide, “RTFM” etiquette)
  - Contributor spotlight and recognition feeds

- **News & Updates**
  - Filtered feeds for open-source, security, and developer tooling

## 🐾 Philosophy

Pawgrammer is designed to:

- Empower contributors with **fast, reliable knowledge**.
- Encourage **community best practices**.
- Keep DevHub’s spaces **welcoming, informed, and fun**.
