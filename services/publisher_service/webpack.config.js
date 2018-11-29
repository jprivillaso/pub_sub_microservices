const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  entry: path.join(__dirname, './index'),
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'publisher.js'
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new UglifyJSPlugin()
  ],
  devtool: 'source-map'
};
