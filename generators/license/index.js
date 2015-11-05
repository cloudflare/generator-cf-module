'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: {
    writeFiles: function() {
      this.fs.copyTpl(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE'),
        {
          year: new Date().getFullYear()
        }
      );
    }
  }
});
