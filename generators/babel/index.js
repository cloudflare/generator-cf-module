'use strict';

var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var BABEL_DEV_DEPENDENCIES = {
  'babel-core': '^6.0.20',
  'babel-cli': '^6.1.1',
  'babelify': '^7.2.0',
  'babel-preset-cf': '^1.2.0'
};

var NPM_SCRIPTS = {
  'build': 'babel src -d lib',
  'prepublish': 'npm run build'
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      pkg.devDependencies = extendObject(pkg.devDependencies, BABEL_DEV_DEPENDENCIES);
      pkg.scripts = extendObject(pkg.scripts, NPM_SCRIPTS);

      this.fs.writeJSON(pkgLocation, pkg);
    },

    writeFiles: function() {
      this.fs.copyTpl(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    }
  }
});
