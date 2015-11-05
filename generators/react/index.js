'use strict';
var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var REACT_VERSION = '^0.14.2';

var REACT_DEPENDENCIES = {
  'react': REACT_VERSION,
  'react-dom': REACT_VERSION
};

var REACT_DEV_DEPENDENCIES = {
  'react-addons-test-utils': REACT_VERSION
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      pkg.dependencies = extendObject(pkg.dependencies, REACT_DEPENDENCIES);
      pkg.devDependencies = extendObject(pkg.devDependencies, REACT_DEV_DEPENDENCIES);

      this.fs.writeJSON(pkgLocation, pkg);
    }
  }
});
