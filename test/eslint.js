'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('eslint', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/eslint'))
      .on('end', done);
  });

  it('should generate the eslintrc configuration', function() {
    assert.file('.eslintrc');
    assert.file('test/.eslintrc');
    assert.fileContent('.eslintrc', 'no-reserved-keys');
    assert.fileContent('test/.eslintrc', 'describe');
  });

  it('should update package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"eslint":');
    assert.fileContent('package.json', '"lint": "eslint');
  });
});
