var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimizer: [new TerserPlugin({ cache: false })]
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.mp3$/,
            loader: 'file-loader'
        },
        {
            test: /\.png$/,
            loader: 'file-loader'
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'file-loader'],
        },
        {
            test: /\.ico$/,
            loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
        }
    ]
  },
  devServer: {
        contentBase: path.resolve(__dirname, "build")
  }
};
