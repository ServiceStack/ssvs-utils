'use strict';
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Unit tests.
        nodeunit: {
            tests: ['./tests/**/*.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('src/tasks');

    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);

};