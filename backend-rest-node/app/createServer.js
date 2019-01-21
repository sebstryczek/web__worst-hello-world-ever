const express = require('express');
const bodyParser = require('body-parser');
const createRouter = require('./createRouter');

const createServer = db => async appConfig => {
  /* Create express app */
  const app = express();
  /* *** */
  
  /* Middlewares */
  app.use( bodyParser.urlencoded({ extended: true }) );
  app.use( bodyParser.json() );
  /* *** */

  const authService = {
    generateToken: require('./auth/generateToken')(appConfig.jwtSecret),
    authMiddleware: require('./auth/authMiddleware')(appConfig.jwtSecret)
  }

  /* Routes */
  const router = createRouter(db)(authService);
  app.use( router );
  /* *** */

  return app;
}

module.exports = createServer;
