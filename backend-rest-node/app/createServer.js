const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createRouter = require('./createRouter');

const createServer = db => async appConfig => {
  /* Create express app */
  const app = express();
  /* *** */
  
  /* Middlewares */
  app.use( cors() );
  app.use( bodyParser.urlencoded({ extended: true }) );
  app.use( bodyParser.json() );
  /* *** */

  /* Routes */
  const router = createRouter(db)(appConfig);
  app.use( router );
  /* *** */

  return app;
}

module.exports = createServer;
