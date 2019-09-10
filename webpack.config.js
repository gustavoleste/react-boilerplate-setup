import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';

const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/,
      },
      {
        test: /\.css$/, loader: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
