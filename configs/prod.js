const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// Configures webpack for creating PROD build:
module.exports = {
  mode:"production",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader",
         options: {
           "configFile":path.resolve(__dirname, './babel.config.json')
         }
       }
    }
   ],
 },
 // NOTE: https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
 optimization: {
   minimizer: [new TerserPlugin({ /* additional options here */ })],
 },
};
