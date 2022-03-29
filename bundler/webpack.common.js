const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const Config = require('../src/config');

module.exports = {
  entry: path.resolve(__dirname, '../src/app/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[contenthash].js',
    sourceMapFilename: 'bundle.[contenthash].js.map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@app': path.resolve(__dirname, '../src/app'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@views': path.resolve(__dirname, '../src/views/'),
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: Config.TITLE,
      template: path.resolve(__dirname, '../src/templates/index.js'),
      favicon: path.resolve(__dirname, '../public/icon.png'),
    }),
    new WebpackPwaManifest({
      name: Config.TITLE,
      short_name: Config.TITLE,
      description: Config.DESCRIPTION,
      background_color: Config.Colors.secondary,
      theme_color: Config.Colors.primary,
      crossorigin: 'use-credentials',
      publicPath: '.',
      icons: [
        {
          src: path.resolve(__dirname, '../public/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve(__dirname, '../public/icon.png'),
          size: '512x512',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
