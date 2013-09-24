'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nginx: {
      options: {
        config: 'conf_file',
        prefix: 'prefix_path'
        test: false,
        globals: ['pid /var/run/nginx.pid', 'worker_processes 2']
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks("tasks");

  // Default task.
  grunt.registerTask("default", "nginx:start");

};
