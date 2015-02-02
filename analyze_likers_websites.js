'use strict';

// Usage:
// node analyze_likers_websites.js >> likers_websites.txt
var posts = require('./posts.json');
var _ = require('lodash');

console.log(_.unique(posts.reduce(function (websites, post) {
  return (post.notes || []).reduce(function (websites, note) {
    websites.push(note.blog_url);
    return websites;
  }, websites);
}, [])).join('\n'));
