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
      'spec',
      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      //'coverage'
    ],
    files: [
      '**/*.spec.ts'
    ],
    preprocessors: {
      '**/*.spec.ts': ['webpack']
    },
    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],
    singleRun: true,

    webpackMiddleware: {
        stats: 'errors-only'
    },

    webpack: require('./webpack.test'),

    // https://github.com/webpack-contrib/karma-webpack/issues/188#issuecomment-268538430
    mime: {
       'text/x-typescript': ['ts','tsx']
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher')
    ]
  });
};
