const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      x: "10px",
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        white: "#ffffff",
        green: "#00ed82",
        dark: "#040505",
        gray: "#151516",
        "blue-1": "#3370BB",
        "gray-1": "#EBEDF2",
        "gray-2": "#656B7B",
        "gray-3": "#DCDFE6",
        "gray-4": "#262930",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      head: ["Graphik Bold"],
      mid: ["Graphik Medium"],
      semi: ["Graphik SemiBold"],
      arial: ["Arial"],
    },
  },
  plugins: [],
};
