const path = require('path');

const config = {
  context: __dirname,

  entry: './main.jsx',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  devtool: 'cheap-eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  }
};

module.exports = config;
