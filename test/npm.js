'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('npm', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/npm'))
      .withOptions({
        name: 'cf-module',
        description: 'A nice module',
        version: '1.0.0',
        authorName: 'James Kyle',
        authorEmail: 'jkyle@cloudflare.com'
      })
      .on('end', done);
  });

  it('should generate the npmignore configuration', function() {
    assert.file('.npmignore');
    assert.fileContent('.npmignore', 'node_modules');
  });

  it('should generate the package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"name": "cf-module"');
    assert.fileContent('package.json', '"description": "A nice module"');
    assert.fileContent('package.json', '"version": "1.0.0"');
    assert.fileContent('package.json', '"author": "James Kyle <jkyle@cloudflare.com>"');
  });
});
