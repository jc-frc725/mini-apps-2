const path = require('path');
const ENTRY_PATH = path.resolve('client', 'app.jsx');
const PUBLIC_PATH = path.resolve('public');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: PUBLIC_PATH,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};