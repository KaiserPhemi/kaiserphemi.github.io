// third-party libraries
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyFiles = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Check environment
const prod = process.env.NODE_ENV === 'production';

// configuration
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devtool: prod ? 'source-map' : 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  mode: prod ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        include: path.join(__dirname, 'assets'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
  output: {
    filename: '[name].[contenthash:8].min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'public/index.html',
    }),
    new CopyFiles({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
    new NodePolyfillPlugin(),
    new Dotenv(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
