'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('git', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/git'))
      .on('end', done);
  });

  it('should generate the gitignore configuration', function() {
    assert.file('.gitignore');
    assert.fileContent('.gitignore', 'node_modules');
  });
});
