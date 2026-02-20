/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                     primary: "#B9FF66",
                      dark: "#191A23",
                     light: "hsl(0, 0%, 100%)",
                      muted: "#6B7280",
      },
       },
  },
  plugins: [],
};
