# ts-react

Typescript react project with webpack 5

## Steps to setup

1. `npm init --yes`
2. `npm i -D webpack webpack-cli webpack-dev-server`
3. udpate `package.json` add`private: true` and udpate scripts
   ```js
    "start": "webpack serve",
    "match": "webpack --match",
    "build": "webpack"
   ```
4. add `webpack.config.js` file
   ```js
   const path = require("path");
   module.exports = {
       mode: "development",
       devtool: false,
       devServer: {
           static: {
               directory: path.join(\_\_dirname, "dist"),
            },
        },
    };
   ```
5. setup babel, install `npm i -D babel-loader @babel/corer @babel/preset-env`
6. update `webpack.config.js`,
   ```js
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
   },
   ```
7. add `babel.config.js`
   ```js
   module.exports = {
     presets: ["@babel/preset-env"],
   };
   ```
8. update `package.json` scripts,
   ```js
       "build":"NODE_ENV=production webpack",
       "build:dev": "webpack",
   ```
