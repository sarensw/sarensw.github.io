var defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        header: ["Saira Extra Condensed", ...defaultTheme.fontFamily.sans]
      },
      height: {
        96: "24rem",
        "500px": "500px",
        "382px": "382px"
      },
      width: {
        "1024px": "1024px",
        788: "788px"
      }
    },
  },
  variants: {},
  plugins: [],
}
