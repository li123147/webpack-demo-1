const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production", //生产模式
    plugins: [
      ...base.plugins,
    new HtmlWebpackPlugin({
      title: "新垣结衣",
      template: "src/assets/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [  
        ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
