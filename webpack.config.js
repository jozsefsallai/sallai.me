const path                 = require('path');
const webpack              = require('webpack');
const HTMLWebpackPlugin    = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new MiniCSSExtractPlugin({
    filename: 'main.css'
  }),
  new HTMLWebpackPlugin({
    template: './src/views/index.pug',
    filename: './index.html',
    inject: false
  }),
  new HTMLWebpackPlugin({
    template: './src/views/404.pug',
    filename: './404.html',
    inject: false
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    })
  );
}

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot|jpg|png|svg)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins,
  resolve: {
    extensions: [ '.js', '.json' ],
    modules: [ 'node_modules', path.resolve(__dirname, 'src') ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
};
