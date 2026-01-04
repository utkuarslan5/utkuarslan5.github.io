/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1220",
        secondary: "#F3F6FA",
        accent: "#1E3A8A",
        pulse: "#0EA5E9",
      },
      fontFamily: {
        inter: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

