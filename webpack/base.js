'use strict';
let path = require('path');

let port = 8000;
let srcPath = path.join(__dirname, '/../webapp');
let publicPath = '/dist/';

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: port,
  debug: true,
  target:'web',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './webapp/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      containers: srcPath + '/containers/',
      components: srcPath + '/components/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
