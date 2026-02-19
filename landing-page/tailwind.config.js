/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                primary: "#5B21B6",   
                accent: "#FB7185",   
                dark: "#111827",
                light: "#F9FAFB",
                 muted: "#6B7280",
      },
    },
  },
  plugins: [],
}
