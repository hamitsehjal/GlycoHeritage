/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d9970",
        secondary: "#2ecc40",
        accent: "#f00b51",
        background: "#001f3f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};