'use strict';

var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var JSFMT_DEV_DEPENDENCIES = {
  'jsfmt': '^0.5.2'
};

var NPM_SCRIPTS = {
  'format': 'jsfmt -w *.js src/ test/'
};

module.exports = generators.Base.extend({
  writing: {
    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation);

      pkg.devDependencies = extendObject(pkg.devDependencies, JSFMT_DEV_DEPENDENCIES);
      pkg.scripts = extendObject(pkg.scripts, NPM_SCRIPTS);

      this.fs.writeJSON(pkgLocation, pkg);
    }
  }
});
