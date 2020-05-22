const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //entry:入口
  output: {
    filename: "index.[contenthash].js", //filename:出口
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "新垣结衣",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/i,
        loader: ["style-loader", "css-loader","stylus-loader"],
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
