module.exports = {
  theme: {
    extend: {
      transform: ["hover"],
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "media",
};
