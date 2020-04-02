var defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        header: ["Saira Extra Condensed", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {},
  plugins: [],
}
