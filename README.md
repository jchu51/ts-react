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
