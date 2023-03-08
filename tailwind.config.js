const { VIEWS_DIR } = require('./build-config');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [`${VIEWS_DIR}/**/*.hbs`],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'ui-sans-serif', 'sans-serif']
    },
    colors: {
      ...colors,
      primary: colors.orange,
    },
    extend: {}
  },
  plugins: []
};
