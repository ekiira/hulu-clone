const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        white: "#ffffff",
        green: "#00ed82",
        dark: "#040505",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      head: ["Graphik Bold"],
      arial: ["Arial"],
    },
  },
  plugins: [],
};
