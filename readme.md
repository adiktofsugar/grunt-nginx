grunt-nginx 
=============

> Grunt task for [Nginx](http://wiki.nginx.org/Main) to start, stop and restart a server.

## Getting Started
Install the plugin with this command:

```shell
npm install grunt-nginx --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-nginx');
```

### Overview

Inside your `Gruntfile.js` file add a section called `nginx`. This section specifies the `nginx` task and any options you want to pass to it.

### Arguments
grunt-nginx uses colon-separated arguments for the `nginx` tasks:

* nginx:start
* nginx:stop
* nginx:restart

These are all self-explanatory.

### Options

#### config ```string``` - required

Specify which configuration file Nginx should use instead of the default.

#### prefix ```string``` - optional

Sets the prefix path (default: /usr/local/nginx/). Any references in the config file will be relative to this path.

#### globals ```string``` - optional

Sets global directives. Further Information can be found [here](http://wiki.nginx.org/NginxMainModule).

#### test ```string``` - optional

Don't run, just test the configuration file. Nginx checks configuration for correct syntax and then try to open files referred in configuration.

### Paths
grunt-nginx supports both absolute and relative paths. Like most grunt plugins, relative paths are with respect to the `Gruntfile.js` gruntfile. 



### Example

```javascript
nginx: {
    options: {
        config: '/path/to/nginx.conf',
        prefix: './relative/path/nginx'
        globals: ['pid /var/run/nginx.pid', 'worker_processes 2']
    }
}

grunt.registerTask("default", "nginx:start");
```
