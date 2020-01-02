module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/validators.js',
        dest: 'dist/validators.min.js'
      }
    },
    jshint: {
      options: {
        eqeqeq: true,
        trailing: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },
  })
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', ['uglify'])
}
