'use strict';

// Usage:
// node analyze_summary.js

var posts = require('./posts.json');
var _ = require('lodash');

console.log(posts.reduce(function (summary, post) {
  return (post.notes || []).reduce(function (summary, note) {
    summary[note.type] = (summary[note.type] || 0) + 1;
    summary.sum += 1;
    return summary;
  }, summary);
}, {
  sum: 0
}));
