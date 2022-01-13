const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = ['Quicksand', 'system-ui'];

module.exports = {
  content: ['index.html', './src/*.{html,jsx}', './src/**/*.{html,jsx}'],
  theme: {
    fontFamily: fontFamily,
    extend: {},
  },
  plugins: [],
};
