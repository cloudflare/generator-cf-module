'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: {
    ensureFiles: function() {
      if (!this.fs.exists(this.destinationPath('src/index.js'))) {
        this.fs.write(this.destinationPath('src/index.js'), '');
      }
    }
  }
});
