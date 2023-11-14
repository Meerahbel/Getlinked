/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Body: ["Clash Display", "sans"],
        Text: ["Montserrat", "sans"],
        Time: ["Unica One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
