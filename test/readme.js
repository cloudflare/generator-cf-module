'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('readme', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/readme'))
      .withOptions({
        name: 'cf-module',
        description: 'A nice module',
      })
      .on('end', done);
  });

  it('should generate the README.md', function() {
    assert.file('README.md');
    assert.fileContent('README.md', '# cf-module');
    assert.fileContent('README.md', '> A nice module');
  });
});
