module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      dev: {
        dest: 'app/vendor'
      }
    },
    less: {
      options: {
        paths: ['styles']
      },
      all: {
        files: {
          'styles/main.css': 'styles/main.less'
        }
      }
    },
    jshint: {
      files: ['app/*.js']
    },
    connect: {
      server: {
        options: {
          livereload: true,
          hostname: '*',
          port: 8790,
          base: '',
          keepalive: true
        }
      }
    },
    watch: {
      html: {
        files: ['*.html'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['app/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['styles/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['bower', 'jshint', 'less']);
};