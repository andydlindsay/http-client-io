var https = require('https');
var host = 'stream-large-file.herokuapp.com';
var path = '/give-me-stuff-now';
var log = console.log;
var options = {
  host,
  path
};

// called by https when the request is made
var callback = function(response) {
  log('In response handler callback!');

  response.on('data', (chunk) => {
    log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    log(chunk.toString());
  });
};

log('I\'m about to make the request!');

https.request(options, callback).end();

log('I\'ve made the request!');
