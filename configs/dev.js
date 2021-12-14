const path = require('path');

// Configures webpack for testing:
module.exports = {
  mode:"development",
  entry: './src/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './test',
  },
  output: {
    path: path.resolve(__dirname, '../test'),
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
 }
};
