const jwt = require('jsonwebtoken');

const jwtVerify = (token, jwtSecret) => new Promise((resolve, reject) => {
  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err || !decodedToken) {
      return reject(err)
    }

    resolve(decodedToken)
  })
});

module.exports = jwtVerify;
