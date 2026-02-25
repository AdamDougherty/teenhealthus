import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#231F20",
        sky: "#2E9DF7",
        sun: "#F3AA32",
        mint: "#8BD1CB",
        border: "rgba(35,31,32,0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 12px 30px rgba(35,31,32,0.12)",
      }
    },
  },
  plugins: [],
};
export default config;
