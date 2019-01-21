const jwt = require('jsonwebtoken');
const config = require('../config');

const jwtVerify = token => new Promise((resolve, reject) => {
  jwt.verify(token, config.app.jwtSecret, (err, decodedToken) => {
    if (err || !decodedToken) {
      return reject(err)
    }

    resolve(decodedToken)
  })
});

module.exports = jwtVerify;
