/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        mainBg: "#f5f6fa",
        accentBlue: "#5358b6",
        btnGray: "#68727e",
        btnRed: "#ec6469",
      },
      colors: {
        accentBlue: "#5358b6",
        accentRed: "#ec6469",
        titleGray: "#2c3545",
        textGray: "#717578",
      },
      borderColor: {
        accentBlue: "#5358b6",
      },
    },
  },
  plugins: [],
};
