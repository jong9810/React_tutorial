const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'reaction-setting',
  mode: 'development', // development production
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: ['./client'],
  },
  module: {
    rules: {
      test: /\.jsx?/,
      loader: 'babel-loader',
      excludes: path.join(__dirname, 'node_modules'),
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['latest 2 chrome versions'],
              },
              debut: true,
            },
          ],
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    port: 3000,
    hot: true,
  },
};
