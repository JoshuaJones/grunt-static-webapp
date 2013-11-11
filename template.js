/*
 * Static Web Project Scaffolding
 * https://github.com/JoshuaJones/grunt-static-webapp
 *
 * Copyright (c) 2013 Joshua Jones, contributors
 * Licensed under the MIT license.
 *
 *  http://gruntjs.com/project-scaffolding
 *
 */


'use strict';

// Template Infos
exports.description = 'Creates a simple starting point for static web projects.';
exports.notes = 'This template creates a basic folder/file skeleton for HTML/CSS/JS web projects.';
exports.after = 'You should now install project dependencies by running _npm install_ & _bower install_';
exports.warnOn = 'Gruntfile.js';
exports.warnOn = 'package.json';
exports.warnOn = 'bower.json';

// Template Init
exports.template = function (grunt, init, done) {
  
  // Prompts
  init.process({}, [
    init.prompt('name', 'ProjectName'),
    init.prompt('description', 'Project description...'),
    init.prompt('version', '0.0.1'),
    init.prompt('homepage'),
    {
      name: 'compass',
      message: 'Are you using SASS/Compass?',
      default: 'Y/n',
      warning: ''
    }, {
      name: 'usemin',
      message: 'Use usemin task for js/css concatenating?',
      default: 'Y/n',
      warning: ''
    }, {
      name: 'compress',
      message: 'Want to create zip/tar archives of the project?',
      default: 'Y/n',
      warning: ''
    }
    ], function (err, props) {
    var files;

    // YepNope Dependencies
    props.compass = /y/i.test(props.compass);
    props.usemin = /y/i.test(props.usemin);
    props.compress = /y/i.test(props.compress);

    // Add Dependencies to package.json
    props.devDependencies = {
      'grunt': '~0.4.1',
      'matchdep': '~0.1.2',
      'grunt-contrib-jshint': '~0.4.1',
      'grunt-concurrent': '~0.1.0',
      'grunt-contrib-cssmin': '~0.6.0',
      'grunt-contrib-uglify': '~0.2.0',
      'grunt-contrib-imagemin': '~0.1.3',
      'grunt-svgmin': '~0.1.0',
      'grunt-contrib-htmlmin': '~0.1.3',
      'grunt-contrib-clean': '~0.4.0',
      'grunt-contrib-copy': '~0.4.1'
    };

    if (props.compass) {
      props.devDependencies['grunt-contrib-watch'] = '~0.4.0';
      props.devDependencies['grunt-contrib-compass'] = '~0.2.0';
    }

    if (props.usemin) {
      props.devDependencies['grunt-contrib-concat'] = '~0.1.3';
      props.devDependencies['grunt-usemin'] = '~0.1.10';
    }

    if (props.compress) {
      props.devDependencies['grunt-contrib-compress'] = '~0.5.2';
    }

    // Output Template
    files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', props);

  })

};