const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //entry:入口
  output: {
    filename: "index.[contenthash].js", //filename:出口
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "新垣结衣",
      template: "src/assets/index.html",
    }),
  ],
};
