'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('babel', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/babel'))
      .on('end', done);
  });

  it('should generate the babelrc configuration', function() {
    assert.file('.babelrc');
    assert.fileContent('.babelrc', 'presets');
  });

  it('should update package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"babel-core":');
    assert.fileContent('package.json', '"babel-cli":');
    assert.fileContent('package.json', '"build": "babel');
    assert.fileContent('package.json', '"prepublish": "npm run build');
  });
});
