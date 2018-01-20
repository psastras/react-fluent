const path = require("path");

module.exports = {
  plugins: {
    "postcss-import": {
      root: path.join(__dirname, "../"),
      path: [path.join(__dirname, "../components")]
    },
    // "postcss-mixins": {},
    "postcss-color-function": {},
    "postcss-apply": {}
    // "postcss-nesting": {},
    // "postcss-cssnext": {
    //   customProperties: false
    // }
    // "postcss-reporter": {
    //   clearMessages: true
    // }
  }
};
