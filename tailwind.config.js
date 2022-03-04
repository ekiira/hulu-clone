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
        "gray-5": "#292C33",
        "gray-6": "#EDEFF2",
        "gray-7": "#DCDFE6"

      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      customBold: ["Graphik Bold"],
      customMedium: ["Graphik Medium"],
      customSemiBold: ["Graphik SemiBold"],
      customLight: ["Graphik Light"],
      arial: ["Arial"],
    },
  },
  plugins: [],
};
