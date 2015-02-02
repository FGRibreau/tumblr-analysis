'use strict';

// Usage:
// node analyze.js >> post_by_count.csv
var posts = require('./posts.json');
var _ = require('lodash');
var moment = require('moment');

console.log(_.chain(posts).sortBy(function (post) {
  return post.timestamp;
}).value().reverse().map(function (post) {
  return [post.note_count, post.post_url, moment(post.timestamp * 1000).format('YYYY-MM-DD')].join(';');
}).join('\n'));
