module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C54D8",
        primaryDark: "#463399",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
