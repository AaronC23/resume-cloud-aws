/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Cabinet Grotesk', 'sans-serf'],
    },
    extend: {
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}

