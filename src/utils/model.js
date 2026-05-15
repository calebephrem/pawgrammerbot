const userModelState = new Map();

export const DEFAULT_MODEL_ID = "openai/gpt-oss-120b";

export const MODELS = [
  {
    id: "openai/gpt-oss-120b",
    name: "GPT OSS 120B",
    provider: "groq",
    description: "General purpose model with strong reasoning.",
    aliases: ["gpt-oss", "oss", "gpt-oss-120b"],
  },
  {
    id: "deepseek/deepseek-v4-flash:free",
    name: "DeepSeek V4 Flash (free)",
    provider: "openrouter",
    description: "Fast free-tier model for quick answers.",
    aliases: ["deepseek", "v4", "flash"],
  },
  {
    id: "google/gemma-4-31b-it:free",
    name: "Gemma 4 31B IT (free)",
    provider: "openrouter",
    description: "Balanced responses with solid instruction tuning.",
    aliases: ["gemma", "gemma4", "31b"],
  },
  {
    id: "arcee-ai/trinity-large-thinking:free",
    name: "Trinity Large Thinking (free)",
    provider: "openrouter",
    description: "Reasoning-heavy style with longer thoughts.",
    aliases: ["trinity", "arcee"],
  },
  {
    id: "baidu/cobuddy:free",
    name: "CoBuddy (free)",
    provider: "openrouter",
    description: "Lightweight assistant for everyday tasks.",
    aliases: ["cobuddy", "baidu"],
  },
];

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findModel(input) {
  const target = normalize(input);
  if (!target) return null;

  return (
    MODELS.find((model) => normalize(model.id) === target) ||
    MODELS.find((model) => normalize(model.name) === target) ||
    MODELS.find((model) =>
      Array.isArray(model.aliases)
        ? model.aliases.some((alias) => normalize(alias) === target)
        : false,
    ) ||
    null
  );
}

export function listAvailableModels() {
  return MODELS.slice();
}

export function getUserModel(userId) {
  const selectedModelId = userModelState.get(userId);
  const selected = selectedModelId
    ? MODELS.find((model) => model.id === selectedModelId)
    : null;
  return selected || MODELS.find((model) => model.id === DEFAULT_MODEL_ID) || MODELS[0];
}

export function setUserModel(userId, modelInput) {
  const model = findModel(modelInput);
  if (!model) return null;
  userModelState.set(userId, model.id);
  return model;
}

export function clearUserModel(userId) {
  return userModelState.delete(userId);
}
