/* eslint-disable import/no-extraneous-dependencies */
const webpack             = require('webpack');
const path                = require('path');
const Dotenv              = require('dotenv-webpack');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const SvgStorePlugin      = require('webpack-svgstore-plugin');
const childProcess        = require('child_process');

module.exports = {
  entry: './app/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader?sourceMap'
        })
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: 'app/index.html', inject: 'body' }),
    new CopyWebpackPlugin([{ from: 'app/assets', to: 'assets' }]),
    new SvgStorePlugin({
      prefix: '',
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.__GIT_DESCRIPTION__': JSON.stringify(
        childProcess.execSync('git describe --always').toString()
      )
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    })
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@graphistry/falcor': path.resolve('./node_modules/@graphistry/falcor/dist/falcor.all.min.js')
    }
  }
};
