/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f5f4f0",
        dark: "#0d0d12",
        dark2: "#181824",
        accent: "#a76298",
        "accent-hover": "#914d82",
        accent2: "#e63946",
        muted: "#8888a0",
        border: "#e0dfd8",
        card: "#ffffff",
        "tag-bg": "#eeeef8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
}