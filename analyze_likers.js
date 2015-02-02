'use strict';

// Usage:
// node analyze_likers_websites.js >> likers_websites.txt
var posts = require('./posts.json');
var _ = require('lodash');

console.log(_.chain(posts).reduce(function (summary, post) {
  return (post.notes || []).reduce(function (summary, note) {
    summary[note.blog_name] = (summary[note.blog_name] || 0) + 1;
    return summary;
  }, summary);
}, {}).pairs().sortBy(1).reverse().value().map(function (line) {
  return line.reverse().join(': ');
}).join('\n'));
