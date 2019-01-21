const jwt = require('express-jwt');
const config = require('../config');

const authMiddleware = jwt({
  secret: config.app.jwtSecret,
  credentialsRequired: false,
});

module.exports = authMiddleware;
