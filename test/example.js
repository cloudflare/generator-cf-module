'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('test', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/example'))
      .on('end', done);
  });

  it('should generate the example files', function() {
    assert.file('example/.gitignore');
    assert.fileContent('example/.gitignore', 'bundle.js');
    assert.file('example/index.html');
    assert.fileContent('example/index.html', '<!doctype html>');
    assert.file('example/styles.css');
    assert.fileContent('example/styles.css', 'box-sizing: border-box');
    assert.file('example/script.js');
    assert.fileContent('example/script.js', 'import React');
  });

  it('should update package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"example":');
  });
});
