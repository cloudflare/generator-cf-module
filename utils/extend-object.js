'use strict';

var _ = require('lodash');
var sortedObject = require('sorted-object');

module.exports = function(dest, src) {
  return sortedObject(_.assign({}, dest, src));
};
