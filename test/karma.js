'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('karma', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/karma'))
      .on('end', done);
  });

  it('should generate the karma configuration', function() {
    assert.file('karma.conf.js');
    assert.fileContent('karma.conf.js', 'config.set({');
  });

  it('should update package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"karma":');
    assert.fileContent('package.json', '"test": "karma start');
  });
});
