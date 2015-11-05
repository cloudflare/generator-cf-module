'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('src', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/src'))
      .on('end', done);
  });

  it('should generate the src/index.js', function() {
    assert.file('src/index.js');
  });
});
