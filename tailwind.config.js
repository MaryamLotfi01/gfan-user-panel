/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#101139",
        secondary: "#F3F4F6",
        accent: "#20A4F3",
        content: "#565E6C",
      },
      borderRadius: {
        5: "1.25rem",
      },
      spacing: {
        18: "4.5rem",
        15: "3.75rem",
      },
      fontFamily: {
        raleway: "Raleway",
        FontAwesome: "FontAwesome",
        dana: "dana",
      },
    },
  },
  plugins: [require("daisyui")],
};
