const MinCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode,
  target,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)css$/i,
        use: [
          MinCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MinCssExtractPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
