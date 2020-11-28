const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: ['./react/index.tsx'],
  output: {
    path: path.resolve(__dirname, './static/js'),
    publicPath: '/static/js/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
