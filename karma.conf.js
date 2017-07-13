'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec'
      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      //'coverage'
    ],
    files: [
      '**/*.spec.ts'
    ],
    preprocessors: {
      '**/*.spec.ts': ['webpack', 'sourcemap']
    },
    browsers: [
      // Run tests using PhantomJS
      'Chrome'
    ],
    singleRun: false,

    webpackMiddleware: {
        stats: 'errors-only'
    },

    webpack: {
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
          //new webpack.IgnorePlugin(/spec\.ts$/),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          })


      ],
      // https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-285598881
      node: {
          fs: 'empty'
      }
    },

    // https://github.com/webpack-contrib/karma-webpack/issues/188#issuecomment-268538430
    mime: {
       'text/x-typescript': ['ts','tsx']
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-chrome-launcher')
    ]
  });
};
