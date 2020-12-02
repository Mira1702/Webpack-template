const path = require("path");
/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }, 
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"                          
        },
          {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
  },
    plugins: [ 
      /* new ExtractTextPlugin({ filename: 'style.css' }) */
      new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}

