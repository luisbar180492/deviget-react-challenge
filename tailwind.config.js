const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,mdx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors,
    extend: {
      spacing: defaultTheme.spacing,
      borderRadius: defaultTheme.borderRadius,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
