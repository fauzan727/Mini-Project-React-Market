/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#313131",
        secondary: "#464646",
        grey: "#f3f3f3",
        "grey-text": "#707070",
        border: "#d8d8d8",
        "hover-link": "#9500ff",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
