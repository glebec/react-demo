'use strict';

const path = require('path');

module.exports = {
  entry: './browser/js/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
