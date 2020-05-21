var path = require('path');

module.exports = {
    mode: 'development',
    //mode:切换模式
    entry: './src/index.js',
    //entry:入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
        //filename:出口
    }
};