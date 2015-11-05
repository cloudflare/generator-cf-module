'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function() {
    this.props = {
      name: this.options.name,
      description: this.options.description
    };
  },

  writing: {
    writeFiles: function() {
      if (this.fs.exists(this.destinationPath('README.md'))) {
        return;
      }

      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          name: this.props.name,
          description: this.props.description
        }
      );
    }
  }
});
