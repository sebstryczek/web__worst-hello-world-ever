const jwt = require('jsonwebtoken');
const config = require('../config');

const options = {
  subject: '', // Intended user of the token.
  issuer: 'Stryczek.pl', // Software organization who issues the token.
  audience: 'http://www.com', // Basically identity of the intended recipient of the token.
  /*
  For example — If the a JWT was issued for audience — “http://abc.in”.
  But the client app tries to use the JWT from “http://xyz.in”,
  then server should throw 403 Forbidden error as the audience identification fails to match.
  */
  expiresIn: 0,
  algorithm: 'HS256',
};

const generateToken = (id, secret, life) => jwt.sign(
  { id }, secret, {...options, expiresIn: life, subject: id.toString()}
);

module.exports = generateToken;
