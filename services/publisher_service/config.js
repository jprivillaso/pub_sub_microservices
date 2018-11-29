const { NODE_ENV } = process.env;

let config = require('./config/config.production');

/* istanbul ignore next */
if (NODE_ENV === 'development') {
  config = require('./config/config.development');
}

module.exports = config;
