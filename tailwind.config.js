/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support

  content: ['./app/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
    	fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Replace with your custom font
      },
    },
  },
  plugins: [],
};
