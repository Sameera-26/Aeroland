/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      sm: "480px", //small
      md: "768px", //medium
      lg: "976px", //large
      xl: "1140px", //extra-large
    },
    extend: {
      colors: {
        secondary: "#6849e6",
      },
    },
  },
  plugins: [],
};
