
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
      'ez-web-toolkit': path.join(__dirname, './src', '/test.ts')
    },
    output: {
      path: path.join(__dirname, './build'),
      filename: '[name].js',
      library: 'ez-web-toolkit',
      libraryTarget: 'umd'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: 'tsconfig.test.json',
                transpileOnly: true
            }
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
      extensions: ['.ts', '.js']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })


  ],
  // https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-285598881
  node: {
      fs: 'empty'
  }
};
