'use strict';

var path = require('path');
var _ = require('lodash');
var generators = require('yeoman-generator');
var parseAuthor = require('parse-author');
var askName = require('inquirer-npm-name');

module.exports = generators.Base.extend({
  initializing: function() {
    this.props = {
      name: this.options.name,
      description: this.options.description,
      version: this.options.version,
      authorName: this.options.authorName,
      authorEmail: this.options.authorEmail
    };
  },

  writing: {
    writeFiles: function() {
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );

      if (this.fs.exists(this.destinationPath('package.json'))) {
        return;
      }

      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          name: this.props.name,
          version: this.props.version,
          description: this.props.description,
          authorName: this.props.authorName,
          authorEmail: this.props.authorEmail
        }
      );
    }
  }
});
