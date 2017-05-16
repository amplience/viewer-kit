module.exports = function (grunt) {
    /* jshint -W097 */
    /* jshint camelcase: false */
    'use strict';


    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {},
        watch: {
            sass: {
                options: {
                    livereload: '<%= connect.serve.options.livereload %>'
                },
                files: [
                    'src/css/**/*.scss',
                    'node_modules/amplience-sdk-client/css/amp.scss'
                ],
                tasks: ['build-css']
            },
            javascript: {
                options: {
                    livereload: '<%= connect.serve.options.livereload %>'
                },
                files: [
                    'src/**/*.js'
                ],
                tasks: ['build-js']
            },
            jsTest: {
                options: {
                    livereload: '<%= connect.serve.options.livereload %>'
                },
                files: [
                    'src/**/*.js',
                    'node_modules/amplience-sdk-client/src/**/*.js'

                ],
                tasks: ['build-js-develop']
            },
            html: {
                options: {
                    livereload: '<%= connect.serve.options.livereload %>'
                },
                files: [
                    '*.html'
                ]
            },
            templates: {
                options: {
                    livereload: '<%= connect.serve.options.livereload %>'
                },
                files: [
                    'src/templates/*.hbs'
                ],
                tasks: ['clean:templates', 'handlebars']
            }
        },
        connect: {
            options: {
                port: 9100,
                hostname: '0.0.0.0',
                base: '.',
                livereload: 35740,
                open: 'http://localhost:9100/src',
                debug: true
            },

            serve: {
                options: {
                    livereload: 35740
                }
            }
        },
        sass: {
            dist: {
                files: {
                    '.tmp/css/viewer.css': 'src/css/main.scss'
                }
            }
        },
        'file_append': {
            revision: {
                files: [
                    {
                        append: '\n\n//revision <%= meta.revision %>\n',
                        input: 'dist/viewer.min.js'
                    },
                    {
                        append: '\n\n//revision <%= meta.revision %>\n',
                        input: 'dist/viewer.js'
                    }
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'src/js/config.js',
                    'src/js/viewer.js',
                    'src/js/bridge-connect.js'
                ]
            }
        },
        jscs: {
            src: [
                'Gruntfile.js',
                'src/js/config.js',
                'src/js/viewer.js',
                'src/js/bridge-connect.js',
            ],
            options: {
                config: '.jscsrc',
                verbose: true,
                fix: false
            }
        },
        handlebars: {
            build: {
                options: {
                    namespace: 'amp.templates',
                    partialsUseNamespace: true,
                    processName: function (filePath) {
                        //if we have sub templates
                        return filePath.replace(/^src\/templates\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    '.tmp/templates.js': 'src/templates/**/*.hbs'
                }
            }
        },
        processhtml: {
            build: {
                files: {
                    'dist/index.html': ['src/index.html'],
                    'dist/3d-spin.html': ['src/3d-spin.html'],
                    'dist/bridge.html': ['src/bridge.html'],
                    'dist/portrait-view.html': ['src/portrait-view.html'],
                    'dist/demos/any-set.html': ['demos/any-set.html'],
                    'dist/demos/outer-video.html': ['demos/outer-video.html']
                }
            }
        },
        concat: {
            css: {
                files: {
                    'dist/css/viewer.css': [
                        '.tmp/css/viewer.css',
                        'node_modules/amplience-sdk-client/dist/video-js/video-js.min.css',
                    ]
                }
            },
            build: {
                files: {
                    'dist/jquery.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                    ],
                    'dist/jquery-ui-custom.js': [
                        'bower_components/jquery-ui/ui/jquery.ui.core.js',
                        'bower_components/jquery-ui/ui/jquery.ui.widget.js'
                    ],
                    'dist/viewer.js': [
                        'node_modules/amplience-sdk-client/dist/video-js/video.min.js',
                        'node_modules/amplience-sdk-client/dist/amplience-sdk-client.js',
                        'node_modules/grunt-contrib-handlebars/node_modules/handlebars/dist/handlebars.runtime.min.js',
                        '.tmp/templates.js',
                        'src/js/hbs-helpers.js',
                        'src/js/detect.min.js',
                        'src/js/config.js',
                        'src/js/viewer.js',
                        'src/js/bridge-connect.js'
                    ],
                    'dist/amplience-ecommerce-bridge-mock.js': [
                        'src/js/amplience-ecommerce-bridge-mock.js'
                    ]
                }
            },
            'build-develop': {
                files: {
                    'dist/jquery.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                    ],
                    'dist/jquery-ui-custom.js': [
                        'bower_components/jquery-ui/ui/jquery.ui.core.js',
                        'bower_components/jquery-ui/ui/jquery.ui.widget.js'
                    ],
                    'dist/viewer.js': [
                        'node_modules/amplience-sdk-client/dist/parts/amplience-api.js',
                        'node_modules/amplience-sdk-client/dist/video-js/video.min.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-stack.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-carousel.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-load.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-auto.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-nav.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-zoom.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-zoom-inline.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-video.js',
                        'node_modules/amplience-sdk-client/src/amp.ui/widget-spin.js',
                        'node_modules/grunt-contrib-handlebars/node_modules/handlebars/dist/handlebars.runtime.min.js',
                        '.tmp/templates.js',
                        'src/js/hbs-helpers.js',
                        'src/js/detect.min.js',
                        'src/js/config.js',
                        'src/js/viewer.js',
                        'src/js/bridge-connect.js'
                    ],
                    'dist/amplience-ecommerce-bridge-mock.js': [
                        'src/js/amplience-ecommerce-bridge-mock.js'
                    ]
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie 10', 'ie 9']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '{,*/}*.css',
                    dest: 'dist/'
                }]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false
            },
            target: {
                files: {
                    'dist/css/viewer.min.css': [
                        'dist/css/viewer.css'
                    ]
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/viewer.min.js': ['dist/viewer.js'],
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/css/svg',
                        src: [
                            '**'
                        ],
                        dest: 'dist/css/svg'
                    },
                    {
                        expand: true,
                        cwd: 'src/css/fonts',
                        src: [
                            '**'
                        ],
                        dest: 'dist/css/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/dist/font',
                        src: [
                            '**'
                        ],
                        dest: 'dist/css/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/amplience-sdk-client/assets/image',
                        src: [
                            '**'
                        ],
                        dest: 'dist/css/assets/image'
                    }
                ]
            },
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: [
                            '**.html'
                        ],
                        dest: 'dist/'
                    }
                ]
            },
            handlebars: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/handlebars/',
                        src: ['**'],
                        dest: 'node_modules/grunt-contrib-handlebars/node_modules/handlebars/'
                    }
                ]
            },
            demos: {
                files: [{
                    expand: true,
                    cwd: 'demos',
                    src: [
                        '**'
                    ],
                    dest: 'dist/demos'
                }]
            }
        },
        clean: {
            html: ['dist/**.html'],
            templates: ['.tmp'],
            distJs: ['dist/**/*.js'],
            distCss: ['dist/assets/*', 'dist/**/*.css']
        },
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        'git-describe': {
            build: {
                options: {
                    prop: 'revision'
                },
                me: {}
            }
        },
        compress: {
            build: {
                options: {
                    mode: 'gzip'
                },
                files: {
                    'dist/gzipped/viewer.min.js': ['dist/viewer.min.js'],
                    'dist/gzipped/viewer.min.css': ['dist/css/viewer.min.css']
                }
            }
        },
        shell: {
            cucumber: {
                command: [
                    'cd cucumber',
                    'cucumber'
                ].join('&&')
            }
        }

    });

    grunt.registerTask('revision-js', 'annotate JS with the current git revision', function () {
        var revision = grunt.option('revision');
        if (revision) {
            grunt.config('meta.revision', revision);
            grunt.task.run('file_append:revision');
        } else {
            grunt.event.once('git-describe', function (rev) {
                grunt.config('meta.revision', rev.toString());
                grunt.task.run('file_append:revision');
            });
            grunt.task.run('git-describe');
        }
    });

    grunt.registerTask('build-js', [
        'clean:distJs',
        'concat:build',
        'uglify:build'
    ]);

    grunt.registerTask('build-js-develop', [
        'clean:distJs',
        'concat:build-develop',
        'uglify:build'
    ]);

    grunt.registerTask('build-css', [
        'clean:distCss',
        'sass',
        'concat:css',
        'cssmin',
        'copy:build',
        'postcss'
    ]);
    grunt.registerTask('build', [
        'copy:handlebars',
        'clean:html',
        'build-css',
        'build-js',
        'copy:demos',
        'clean:templates',
        'handlebars',
        'compress:build',
        'processhtml'

    ]);

    grunt.registerTask('build-develop', [
        'copy:handlebars',
        'clean:html',
        'build-css',
        'build-js-develop',
        'copy:demos',
        'clean:templates',
        'handlebars',
        'compress:build',
        'processhtml'

    ]);

    grunt.registerTask('code-quality', [
        'jshint'
    ]);

    grunt.registerTask('cucumber', [
        'shell:cucumber'
    ]);

    grunt.registerTask('default', [
        'build',
        'connect:serve',
        'watch'
    ]);

    grunt.registerTask('develop', [
        'build-develop',
        'connect:serve',
        'watch'
    ]);
};
