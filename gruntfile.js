module.exports = function(grunt) {

  grunt.initConfig({
      qunit: {
        all: ['test/**/*_test.html']
      },

      jsdoc : {
          dist : {
              src: ['src/*.js'],
              options: {
                  destination: 'doc'
              }
          }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-jsdoc');

};