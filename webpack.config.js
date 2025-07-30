// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',

  entry: './blocks/src/blocks.js',

  output: {
    path: path.resolve(__dirname, 'blocks/dist'),
    filename: 'blocks.build.js',
    clean: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /editor\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          },
        ],
      },
      {
        test: /style\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'readme.md'),
          to: path.resolve(__dirname, 'readme.txt'),
        },
      ],
    }),
  ],

  infrastructureLogging: { level: 'warn' },
  stats: isProd ? 'normal' : 'minimal',
};
