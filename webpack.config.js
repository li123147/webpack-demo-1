const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, //把base属性抄过来
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        //发现任何以.css结尾的文件名，css-loader：读到js里，style.css：读到的放到head标签里
      },
    ],
  },
};
