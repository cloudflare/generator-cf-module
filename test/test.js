'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('test', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/test'))
      .on('end', done);
  });

  it('should generate the test/index.js', function() {
    assert.file('test/index.js');
  });
});
