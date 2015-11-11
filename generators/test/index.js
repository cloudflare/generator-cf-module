'use strict';

var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var TEST_DEV_DEPENDENCIES = {
  'mocha': '^2.3.3',
  'chai': '^3.4.1'
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      pkg.devDependencies = extendObject(pkg.devDependencies, TEST_DEV_DEPENDENCIES);

      this.fs.writeJSON(pkgLocation, pkg);
    },

    ensureFiles: function() {
      if (!this.fs.exists(this.destinationPath('test/index.js'))) {
        this.fs.write(this.destinationPath('test/index.js'), '');
      }
    }
  }
});
