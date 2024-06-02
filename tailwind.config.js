/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      sans: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}

