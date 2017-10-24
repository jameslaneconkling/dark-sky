/* eslint-disable import/no-extraneous-dependencies */
const webpack             = require('webpack');
const path                = require('path');
const Dotenv              = require('dotenv-webpack');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const SvgStorePlugin      = require('webpack-svgstore-plugin');
const childProcess        = require('child_process');


const HOST = 'localhost';
const PORT = process.env.PORT || 4000;
const DEV_PROXY = process.env.DEV_PROXY || 'https://api.darksky.net';


module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ],

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
        use: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        }
      }, {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]'
          }
        }
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
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.__GIT_DESCRIPTION__': JSON.stringify(
        childProcess.execSync('git describe --always').toString()
      )
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: HOST,
    port: PORT,
    proxy: {
      '/forecast/*': {
        target: DEV_PROXY,
        secure: true,
        changeOrigin: true
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@graphistry/falcor': path.resolve('./node_modules/@graphistry/falcor/dist/falcor.all.js')
    }
  }
};
