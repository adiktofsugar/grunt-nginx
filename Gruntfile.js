'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nginx: {
      options: {
        config: '../../quaneo/dev/qgp-portal/nginx/nginx.conf',
        prefix: '../../nginx/'
        // test: false,
        // globals: ['pid /var/run/nginx.pid', 'worker_processes 2']
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks("tasks");

  // Default task.
  grunt.registerTask("default", "nginx:start");

};
