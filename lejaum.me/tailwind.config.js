/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      'pretao': '#1A1918',
      'laranjaum': '#ff5400',
      'branquin': '#f4f4f4',
    },
    
    fontSize: {
      'h1': [96, {
        letterSpacing: -1.5,
        fontWeight: 900,
      }],

      'h2': [60, {
        letterSpacing: -0.5,
        fontWeight: 700,
      }],

      'h3': [48, {
        letterSpacing: 0,
        fontWeight: 400,
      }],

      'h4': [34, {
        letterSpacing: 0.25,
        fontWeight: 400,
      }],

      'h5': [24, {
        letterSpacing: 0,
        fontWeight: 400,
      }],

      'h6': [20, {
        letterSpacing: 0.15,
        fontWeight: 500,
      }],

      'BUTTON': [14, {
        letterSpacing: 1,
        fontWeight: 500,
      }],

      'home': [76, {
        fontWeight: 500,
      }],

      'home-bold': [76, {
        fontWeight: 900,
      }],

    },
    extend: {
      fontFamily: {
        'georama': ['Georama', 'sans-serif'],
      },
    },
  },
  plugins: [],
}