import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      fontFamily: {
        hindMysuru: ["Hind Mysuru", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        yujiMai: ["Yuji Mai", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        light: {
          primary: "#4A90E2",
          secondary: "#50E3C2",
          accent: "#F5A623",
          background: "#F7F8FA",
        },
        dark: {
          primary: "#1E3A8A",
          secondary: "#065F46",
          accent: "#D97706",
          background: "#101010",
        },
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
} satisfies Config;
