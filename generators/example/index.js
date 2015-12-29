'use strict';

var generators = require('yeoman-generator');
var extendObject = require('../../utils/extend-object');

var NPM_SCRIPTS = {
  'example': 'browserify example/script.js -o example/bundle.js -t babelify --debug'
};

module.exports = generators.Base.extend({
  writing: {
    initializing: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      this.props = {
        description: pkg.description
      };
    },

    updatePackage: function() {
      var pkgLocation = this.destinationPath('package.json');
      var pkg = this.fs.readJSON(pkgLocation) || {};

      if (pkg.scripts && pkg.scripts.example) {
        return;
      }

      pkg.scripts = extendObject(pkg.scripts, NPM_SCRIPTS);

      this.fs.writeJSON(pkgLocation, pkg);
    },

    ensureFiles: function() {
      if (this.fs.exists(this.destinationPath('example'))) {
        console.log('Not creating any files in the `example/` directory since it already exists.');
        return;
      }

      this.fs.copyTpl(
        this.templatePath('gitignore'),
        this.destinationPath('example/.gitignore')
      );

      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('example/index.html'),
        {
          description: this.props.description
        }
      );

      this.fs.copyTpl(
        this.templatePath('styles.css'),
        this.destinationPath('example/styles.css')
      );

      this.fs.copyTpl(
        this.templatePath('script.js'),
        this.destinationPath('example/script.js'),
        {
          description: this.props.description
        }
      );
    }
  }
});
