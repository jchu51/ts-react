const MinCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.s?css$/i,
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
