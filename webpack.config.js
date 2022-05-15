const path = require("path");

module.exports = {
  mode: "development",

  devtool: false,

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
