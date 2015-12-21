var config = {};

defined = function(variable) {
  if (typeof variable !== 'undefined' && variable !== null)
    return true;
  return false;
}

config.host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
config.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

config.ssl  = false;

if (defined(process.env.OPENSHIFT_APP_DNS)) {
  if (config.ssl) {
    config.url = 'https://' + process.env.OPENSHIFT_APP_DNS;
  } else {
    config.url = 'http://' + process.env.OPENSHIFT_APP_DNS;
  }
} else {
  // set your own URL here, defaults to 127.0.0.1
  config.url = config.host;
}

module.exports = config;
