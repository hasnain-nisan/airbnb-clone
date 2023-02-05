/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      }, //end of fontFamily
      colors: {
        primary: '#FF385C'
      },
    },
  },
  plugins: [],
}
