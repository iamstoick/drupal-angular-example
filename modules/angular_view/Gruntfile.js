module.exports = function (grunt) {
  "use strict";

  // Config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/**/*.js', '!./js/angular-article-view.js'],
        tasks: ['jshint', 'concat:articles']
      }
    },
    concat: {
      articles: {
        src: ['./js/articles/**/*.js', '!./js/articles/angular-article-view.js'],
        dest: './js/angular-article-view.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/**/*.js',
        '!js/**/*.js'
      ]
    },
  });
  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task.
  grunt.registerTask('default', 'watch');
};
