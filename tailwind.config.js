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
        black: "#0b0c0f",
        "blue-1": "#3370BB",
        "gray-1": "#EBEDF2",
        "gray-2": "#656B7B",
        "gray-3": "#DCDFE6",
        "gray-4": "#B8BECC",
        "gray-5": "#ffffff99",
        "gray-6": "#c8c8c866",
        "gray-7": "#DCDFE6",
        "gray-8": "#272c34",
        "gray-9": "#424957",
        "green-1": "#1ce783",
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
