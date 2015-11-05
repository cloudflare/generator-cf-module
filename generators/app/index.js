'use strict';

var path = require('path');
var _ = require('lodash');
var generators = require('yeoman-generator');
var parseAuthor = require('parse-author');
var askName = require('inquirer-npm-name');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.option('name', {
      type: String,
      required: false,
      desc: 'Name of module'
    });

    this.option('description', {
      type: String,
      required: false,
      desc: 'Description of module'
    });

    this.option('react', {
      type: String,
      required: false,
      default: false,
      desc: 'Should use React'
    });
  },

  initializing: function() {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});

    this.props = {
      name: this.pkg.name,
      description: this.pkg.description,
      version: this.pkg.version || '0.0.0'
    };

    if (_.isObject(this.pkg.author)) {
      this.props.authorName = this.pkg.author.name;
      this.props.authorEmail = this.pkg.author.email;
    } else if (_.isString(this.pkg.author)) {
      var info = parseAuthor(this.pkg.author);
      this.props.authorName = info.name;
      this.props.authorEmail = info.email;
    }
  },

  prompting: {
    askForModuleName: function() {
      if (this.pkg.name || this.options.name) {
        this.props.name = this.pkg.name || _.kebabCase(this.options.name);
        return;
      }

      var done = this.async();

      askName({
        name: 'name',
        message: 'Module Name',
        default: path.basename(process.cwd()),
        filter: _.kebabCase,
        validate: function (str) {
          return str.length > 0;
        }
      }, this, function (name) {
        this.props.name = name;
        done();
      }.bind(this));
    },

    askFor: function () {
      var done = this.async();

      var prompts = [{
        name: 'description',
        message: 'Description',
        when: !this.pkg.description
      }, {
        name: 'authorName',
        message: 'Author\'s Name',
        when: !this.pkg.author,
        default: this.user.git.name(),
        store: true
      }, {
        name: 'authorEmail',
        message: 'Author\'s Email',
        when: !this.pkg.author,
        default: this.user.git.email(),
        store: true
      }];

      this.prompt(prompts, function (props) {
        this.props = _.merge(this.props, props);
        done();
      }.bind(this));
    }
  },

  default: function() {
    this.composeWith('cf-module:git');
    this.composeWith('cf-module:npm', {
      options: {
        name: this.props.name,
        description: this.props.description,
        version: this.props.version,
        authorName: this.props.authorName,
        authorEmail: this.props.authorEmail
      }
    });
    this.composeWith('cf-module:readme', {
      options: {
        name: this.props.name,
        description: this.props.description
      }
    });
    this.composeWith('cf-module:license');

    this.composeWith('cf-module:src');
    this.composeWith('cf-module:test');

    this.composeWith('cf-module:eslint');
    this.composeWith('cf-module:jsfmt');
    this.composeWith('cf-module:babel');
    this.composeWith('cf-module:karma');

    if (this.options.react) {
      this.composeWith('cf-module:react');
    }
  },

  installing: function() {
    this.npmInstall();
  }
});
