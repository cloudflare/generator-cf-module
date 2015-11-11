'use strict';
var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var KARMA_DEV_DEPENDENCIES = {
  'karma': '^0.13.15',
  'karma-browserify': '^4.4.0',

  'karma-mocha': '^0.2.0',
  'karma-mocha-reporter': '^1.1.1',
  'karma-tape-reporter': '^1.0.3',
  'karma-beep-reporter': '^0.1.4',

  'karma-coverage': '^0.5.3',
  'browserify-istanbul': '^0.2.1',

  'karma-chrome-launcher': '^0.2.1',
  'karma-firefox-launcher': '^0.1.6',
  'karma-safari-launcher': '^0.1.1',

  'karma-sauce-launcher': '^0.3.0',

  'minimist': '^1.2.0',
  'defined': '^1.0.0'
};

var NPM_SCRIPTS = {
  'test': 'karma start'
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      pkg.devDependencies = extendObject(pkg.devDependencies, KARMA_DEV_DEPENDENCIES);
      pkg.scripts = extendObject(pkg.scripts, NPM_SCRIPTS);

      this.fs.writeJSON(pkgLocation, pkg);
    },

    writeFiles: function() {
      this.fs.copyTpl(
        this.templatePath('karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
    }
  }
});
