/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: 'aqua' }, 
          '50%': { color: 'yellow' },
          '100%': { color: 'rgb(55, 94, 99)' }, 
        },
      },
      animation: {
        colorChange: 'colorChange 3s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}

