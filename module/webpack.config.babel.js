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

const libraryName = 'module.umd';
const outputFile  = libraryName + '.js';

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {test: /\.js$/, use: [{loader: 'babel-loader'},{loader: 'eslint-loader'}], exclude: /node_modules/},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /.css$/, use: [{loader: 'style-loader'},{loader: 'css-loader'}]},
      {test: /\s[a|c]ss$/, loader: 'sass-loader'}
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
