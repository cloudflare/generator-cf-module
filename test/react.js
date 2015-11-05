'use strict';
var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('react', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/react'))
      .on('end', done);
  });

  it('should update package.json', function() {
    assert.file('package.json');
    assert.fileContent('package.json', '"react":');
    assert.fileContent('package.json', '"react-dom":');
  });
});
