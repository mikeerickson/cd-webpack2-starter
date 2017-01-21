/*
 * webpack.config.js
 * requires:
 * - webpack@beta (use beta tag to get latest webpack 2)
 * - babel (babel-core, babel-loader, babel-preset-es2015, babel-register, .babelrc)
 * - eslint (eslint, babel-eslint, .eslintrc.yml)
 * - sass (sass-loader)
 * - Plugins:
 *   o progress-bar-webpack-plugin
*/

import path  from 'path';
import chalk from 'chalk';

import ProgressBarPlugin from 'progress-bar-webpack-plugin'

const config = {
  context: path.join(__dirname),
  entry: {
    app: path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, loaders: ['babel-loader','eslint-loader'], exclude: /node_modules/},
      {test: /\s[a|c]ss$/, use: [{loader: 'sass-loader'}]}
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: chalk.yellow.bold('  Building Node Application [:bar] ') + chalk.green.bold(':percent') + chalk.bold(' (:elapsed seconds)'),
      clear: true,
      summary: true
    })
  ],
  devServer: {
    stats: 'errors-only', // hide all those annoying warnings when webpack is building...
  }
};

export default config;
