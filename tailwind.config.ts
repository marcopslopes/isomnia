import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0e0e0c",
        foreground: "#FAF8F5",
        border: "rgba(42,107,69,0.15)",
        muted: {
          DEFAULT: "rgba(42,107,69,0.08)",
          foreground: "rgba(250,248,245,0.45)",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
