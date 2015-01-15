

module.exports = function (grunt)
{

    // init config
    grunt.initConfig(
    {
        sass:
        {
            general:
            {
                files:
                [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.scss',
                        dest: 'src',
                        ext: '.css'
                    }
                ]
            }
        },


        uglify:
        {
            dist:
            {
                files:
                {
                    'dist/cpa.widgets.template.min.js': ['src/*.js']
                }
            }
        },


        cssmin:
        {
            dist:
            {
                files:
                {
                    'dist/cpa.widgets.template.min.css': ['src/*.css']
                }
            }
        },


        copy:
        {
            dist:
            {
                files:
                [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/**/*.css'],
                        dest: 'dist/',
                        filter: ''
                    }
                ],
            },
        },


        wiredep:
        {
            task:
            {
                src: 'index.html'
            }
        },


        karma: 
        {
            unit:
            {
                configFile: 'karma.conf.js',
                background: true,
                singleRun: false
            }
        },


        connect:
        {
            server:
            {
                livereload: true,
                options:
                {
                    port: 9000,
                    hostname: 'localhost',
                    open: true 
                }
            }
        },


        open:
        {
            dev:
            {
                path: 'http://localhost:9000/index.html',
                app: 'Firefox'
            }
        },


        watch:
        {
            scripts:
            {
                files:
                [
                    'src/*.js',
                    'src/*.css',
                    'index.html'
                ],
                tasks: [],
                options:
                {
                    livereload: true,
                    spawn: false
                },
            },


            karma:
            {
                files: ['src/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },


        clean:
        {
            dev:
            [
                'bower_components',
                'node_modules',
                'dist',
                'src/*.css*',
                'npm-debug.log',
                '.sass-cache'
            ],
            dist:
            [
                'dist/*.css',
                '!dist/*.min.css',
                'dist/*.js',
                '!dist/*.min.js',
            ]
        }
    });



    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');



    // register custom tasks
    grunt.registerTask('build_dev', ['sass', 'wiredep']);
    grunt.registerTask('build_dist', ['sass', 'uglify:dist', 'copy:dist', 'cssmin:dist', 'clean:dist']);
    grunt.registerTask('run', ['build_dev', 'connect:server', 'karma:unit:start watch', 'watch']);

};