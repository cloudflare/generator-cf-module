'use strict';

var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var ESLINT_DEV_DEPENDENCIES = {
  'eslint': '^1.8.0'
};

var NPM_SCRIPTS = {
  'lint': 'eslint *.js src/ test/'
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      pkg.devDependencies = extendObject(pkg.devDependencies, ESLINT_DEV_DEPENDENCIES);
      pkg.scripts = extendObject(pkg.scripts, NPM_SCRIPTS);

      this.fs.writeJSON(pkgLocation, pkg);
    },

    writeFiles: function() {
      this.fs.copyTpl(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );

      this.fs.copyTpl(
        this.templatePath('test/eslintrc'),
        this.destinationPath('test/.eslintrc')
      );
    }
  }
});
