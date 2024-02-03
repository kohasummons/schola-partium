const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      bricolage: ['Bricolage Grotesque', ...defaultTheme.fontFamily.sans],
    },
  }
};
