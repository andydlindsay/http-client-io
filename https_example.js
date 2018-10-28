var https = require('https');
var host = 'www.example.org';
var log = console.log;
var options = {
  host,
  path: '/'
};

// called by https when the request is made
var callback = function() {
  log('In response handler callback!');
};

log('I\'m about to make the request!');

https.request(options, callback).end();

log('I\'ve made the request!');
