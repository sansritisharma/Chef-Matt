/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#D29A5A",
        txtblack: "#130F0C",
        background: "#180c0c",
      },
    },
  },

  plugins: [],
};
