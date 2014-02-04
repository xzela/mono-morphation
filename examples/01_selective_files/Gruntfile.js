module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      main: {
        options: {debug: true},
        files: {'bundle.js': 'index.js'}
      }
    }
  });
  //tell Grunt to load taks from NPM
  grunt.loadNpmTasks('grunt-browserify');

  // add tasks
  grunt.registerTask('default', ['browserify']);
};
