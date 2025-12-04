import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Report a Website Issue",
    prompt: "I need to report a website bug or issue.",
    icon: "circle-question",
  },
  {
    label: "Brief a New Website Job",
    prompt: "I want to brief a new website job or project.",
    icon: "circle-question",
  },
  {
    label: "Start a Marketing Campaign",
    prompt: "I want help starting a new marketing campaign.",
    icon: "circle-question",
  },
  {
    label: "Ask a General Question",
    prompt: "I need some general support or help with something else.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can IGNITE help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
