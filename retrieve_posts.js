'use strict';
var async = require('async');
var _ = require('lodash');
var tumblr = require('tumblr.js');
var assert = require('better-assert');

assert(_.isString(process.env.CONSUMER_KEY) && process.env.CONSUMER_KEY.length > 0);
assert(_.isString(process.env.CONSUMER_SECRET) && process.env.CONSUMER_SECRET.length > 0);
assert(_.isString(process.env.TOKEN) && process.env.TOKEN.length > 0);
assert(_.isString(process.env.TOKEN_SECRET) && process.env.TOKEN_SECRET.length > 0);
assert(_.isString(process.env.BLOG_NAME) && process.env.BLOG_NAME.length > 0);

var client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
});

// quick & dirty it is, life's short, done is better than perfect, I only had 2 hours for the whole project.
// boy, I need to go past this, my eyes are bleeding...
// ... farewell code, hope I will never see you again.

var offset = 0;
var LIMIT = 20;
var arr = [];

function done(err) {
  console.log(JSON.stringify(arr));
}

function tooManySideEffects(next) {
  client.posts(process.env.BLOG_NAME, {
    notes_info: true,
    limit: LIMIT,
    offset: offset
  }, function onTumblrData(err, data) {
    if (err) {
      console.error(err);
      return _.defer(next);
    }

    if (!_.isObject(data) ||  !_.isArray(data.posts)) {
      console.error('Invalid data received', data);
      return _.defer(next);
    }

    offset += LIMIT;

    if (data.posts.length === 0) {
      // stop there we are done
      return next('done');
    }

    arr.push.apply(arr, data.posts);
    next();
  });
}

async.forever(tooManySideEffects, done);
