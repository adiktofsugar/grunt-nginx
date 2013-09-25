'use strict';

var path = require('path');

module.exports = function(grunt) {

    var warning = function(target){
        var supported = 'nginx:start, nginx:stop or nginx:restart'
        grunt.log.warn('Operation ' + target + ' unsupported. Only ' + supported);
    };

    var success = function(result){
        grunt.log.ok(result);
    };

    var fullpath = function(p, type, required){
        var fp = path.resolve(p);
        if(grunt.file.exists(fp) || !required) { return fp; }
        var error = ' (' + type + ' path): is required, but invalid.'
        throw fp + error;
    };

    var argument = function(options){
        var args = [];
        if(options.signal) { args.push('-s'); args.push(options.signal); }
        if(options.config) { args.push('-c'); args.push(fullpath(options.config, 'config', true)); }
        if(options.prefix) { args.push('-p'); args.push(fullpath(options.prefix, 'prefix')); }
        var globals = options.globals;
        if(globals){
            args.push('-g');
            args.push(globals.join('; ')); 
        }
        if(options.test) { args.push('-t'); }
        return args;
    };

    var spawn = function(command, options, done){
        var args = argument(options);
        var options = {
            cmd: command,
            args: args,
            opts: { stdio: 'inherit' }
        };
        grunt.util.spawn(options, function(err, result){
            if(err) throw err;
            success(result);
            done();
        });
    };

    grunt.registerTask( 'nginx', 'blah blah blah', function(target) {

        // Merge With Defaults
        var options = this.options({
            test: false
        });

        var done = this.async();

        var start = function(){
            console.log('starting...');
            spawn('nginx', options, done);
        };

        var stop = function(){
            console.log('stopping...');
            options.signal = 'stop';
            spawn('nginx', options, done);
        };

        var restart = function(){
            console.log('restarting...');
            options.signal = 'reload';
            spawn('nginx', options, done);
        };

        var commands  = {
            start:      start,
            stop:       stop,
            restart:    restart
        };

        try {
            if(commands.hasOwnProperty(target)) { commands[target].call(this, ''); }
            else { warning(target); }
        }
        catch(e) {
           grunt.log.error('Exception thrown in attempt to ' + target + ' nginx' + ': ' + e);
        }

    });
};
