var path = require('path');
var webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
}

module.exports = {

  entry: {
    'ez-web-toolkit': PATHS.src + '/index.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'ez-web-toolkit',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ],
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.IgnorePlugin(/spec\.ts$/),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })


  ]
}
