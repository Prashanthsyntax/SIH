
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0a",
          800: "#1a1a1a",
          700: "#2a2a2a",
          600: "#3a3a3a",
        },
        primary: {
          500: "#6366f1",
          600: "#4f46e5",
        },
        neon: {
          pink: "#ff00ff",
          blue: "#00ffff",
          purple: "#9d00ff",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(99, 102, 241, 0.5)",
        "glow-pink": "0 0 15px rgba(255, 0, 255, 0.5)",
        "glow-blue": "0 0 15px rgba(0, 255, 255, 0.5)",
      },
    },
  },

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },

  plugins: [],
};
