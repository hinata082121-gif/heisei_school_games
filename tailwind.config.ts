import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#28231d",
        chalk: "#f7f1dc",
        board: "#173d34",
        "board-deep": "#0f2e28",
        paper: "#fff9e8",
        "school-red": "#b44436",
        "school-blue": "#2f5e87",
        "school-yellow": "#d6a63d",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Hiragino Sans\"",
          "\"Yu Gothic\"",
          "sans-serif",
        ],
        mono: [
          "\"Courier New\"",
          "\"SFMono-Regular\"",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        pixel: "4px 4px 0 #28231d",
        "pixel-sm": "3px 3px 0 #28231d",
      },
    },
  },
  plugins: [],
};

export default config;
