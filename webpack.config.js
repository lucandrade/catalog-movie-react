var debug = process.env.NODE_ENV !== "production";
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var devPlugins = [
  new CopyWebpackPlugin([
    { from: './css/*', to: 'css' },
    { from: './index.html', to: 'index.html' },
    { from: './img/*', to: './resources/img' },
  ])
];

var productionPlugins = devPlugins.slice();
productionPlugins.push(new webpack.optimize.DedupePlugin());
productionPlugins.push(new webpack.optimize.OccurenceOrderPlugin());
productionPlugins.push(new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }));

module.exports = {
  context: __dirname + '/src/',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/main.js",
  resolveLoader: {
    modulesDirectories: [
      __dirname + '/node_modules'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        'query': {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "app.min.js"
  },
  plugins: debug ? devPlugins : productionPlugins,
};