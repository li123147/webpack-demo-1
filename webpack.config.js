var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
  mode: "development", //mode:切换模式
  entry: "./src/index.js", //entry:入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js", //filename:出口
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "新垣结衣",
      template: "src/assets/index.html"
    }),
      module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  ],
};
