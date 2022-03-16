/* eslint @typescript-eslint/no-var-requires: 0 */
const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        body: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
        serif: "'Merriweather', Georgia, serif",
      },
      colors: {
        primary: {
          50: '#527a81',
          100: '#487077',
          200: '#3e666d',
          300: '#345c63',
          400: '#2a5259',
          500: '#20484f',
          600: '#163e45',
          700: '#0c343b',
          800: '#022a31',
          900: '#002027',
        },
        secondary: {
          50: '#80cddd',
          100: '#76c3d3',
          200: '#6cb9c9',
          300: '#62afbf',
          400: '#58a5b5',
          500: '#4e9bab',
          600: '#4491a1',
          700: '#3a8797',
          800: '#307d8d',
          900: '#267383',
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
}
