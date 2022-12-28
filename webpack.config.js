const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
};
