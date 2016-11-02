module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var app_paths = {
        app: './app',
        dist: './dist',
        tmp: '.tmp',
        assets_img: 'assets/img',
        assets_fonts: 'assets/fonts'
    };

    grunt.initConfig({

        paths: app_paths,

        connect: {
            dist: {
                options: {
                    base: {
                        path: 'dist'
                    },
                    hostname: '*',
                    port: 8080
                }
            },
            server: {
                options: {
                    port: 8080,
                    hostname: '*',
                    livereload: true
                }
            }
        },

        watch: {
            app: {
                files: ['index.html', 'app/*.js', 'app/**/*.js', 'app/**/*.html'],
                tasks: [],
                options: {
                    livereload: 35729
                }
            },
            less: {
                files: ['assets/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: 35729
                }
            }
        },

        less: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/less/',
                    src: ['**/*.less'],
                    dest: './assets/css',
                    ext: '.css'
                }]
            }
        },

        shell: {
            nodemon: {
                command: 'nodemon server.js',
                options: {
                    stdout: true,
                    stderr: true
                }
            }
        },

        concurrent: {
            target: ['api', 'dev']
        }
    });

    grunt.registerTask('api', 'shell:nodemon');
    grunt.registerTask('dev', ['connect:server', 'watch']);
    grunt.registerTask('default', ['concurrent']);
};