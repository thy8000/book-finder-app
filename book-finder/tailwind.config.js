/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
}

