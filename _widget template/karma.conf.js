

module.exports = function (config)
{
    config.set(
    {
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: false,
        basePath: './',
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],

        files:
        [
            // replace these with your own dependenices
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',

            // this is needed if testing angular, otherwise it can be removed
            'node_modules/angular-mocks/angular-mocks.js',

            // replace this with your own code paths
            'src/**/*.js'
        ],

        plugins:
        [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ]
    });
};