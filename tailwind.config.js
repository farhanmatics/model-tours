/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        tourista: '#FFCB0B',
        viacolor: '#E48FA0',
        tourPurple: '#7039aa',
        lightPurple: '#8a52ba',
        blueSky: '#79def2',
        darkSky: '#1c0f36',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

