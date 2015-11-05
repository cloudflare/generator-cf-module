'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('license', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/license'))
      .on('end', done);
  });

  it('should generate the LICENSE', function() {
    assert.file('LICENSE');
    assert.fileContent('LICENSE', 'Copyright');
  });
});
