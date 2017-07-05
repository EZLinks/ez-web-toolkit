var path = require('path');

module.exports = {
    configuration: require('./tslint-dev'),

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: true,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,

    // These options are useful if you want to save output to files
    // for your continuous integration server
    fileOutput: {
        // The directory where each file's report is saved
        dir: path.resolve(__dirname, '../../tslint-reports'),

        // The extension to use for each report's filename. Defaults to "txt"
        ext: "xml",

        // If true, all files are removed from the report directory at the beginning of run
        clean: true,

        // A string to include at the top of every report file.
        // Useful for some report formats.
        header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

        // A string to include at the bottom of every report file.
        // Useful for some report formats.
        footer: "</checkstyle>"
    }
};
