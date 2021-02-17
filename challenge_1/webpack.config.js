const path = require('path');
const ENTRY_PATH = path.resolve('client', 'app.jsx');
const PUBLIC_DIR = path.resolve('public');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    filename: 'app.js',
    path: PUBLIC_DIR,
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