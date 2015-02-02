'use strict';

// Usage:
// node analyze_tags.js >> tags.txt
var posts = require('./posts.json');
var _ = require('lodash');

console.log(posts.reduce(function (a, b) {
  return _.union(a, b.tags);
}, []).sort().join(', '));
