/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      barlow: ["BarlowThin", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: '0.3rem',
        xs: '0.4rem',
        sm: '0.5rem',
        m: '0.65rem',
        base: '0.8rem',
        l: '1rem',
        xl: '1.25rem',
        '1.5xl': '1.4rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      // 500% - xxs 
      // 400% - XS
      // 300% - s
      // 240% - sm
      // 200% - md
      // 170% - lg
      // 133% - xl
      // 110% - 2xl
      screens: {
        // potential a fix?         xs: { min: '0px', max: '639px' }, 

        'xs': '420px',
        's': '520px',
      },
      spacing: {
        '5px': '5px',
      },
      animation: {
        typewriter: 'typewriter 5s steps(30) forwards',
        caret: 'typewriter 5s steps(30) forwards, blink 1s steps(30) infinite 3s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
