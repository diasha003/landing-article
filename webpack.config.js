const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js', 

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },

  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), new TerserPlugin()
    ],
    minimize: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, 
  },

  mode: 'development', 
};