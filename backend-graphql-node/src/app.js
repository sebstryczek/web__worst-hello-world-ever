const express = require('express');
const expressGraphql = require('express-graphql');
const bodyParser = require('body-parser');

const { authMiddleware } = require('./utils');
const { schema } = require('./graphql');

/* Create express app */
const app = express();
/* *** */

/* Middlewares */
app.use( bodyParser.json() );
app.use( authMiddleware );
/* *** */

/* Routes */
app.use('/graphql',
  expressGraphql(req => ({
    schema,
    context: { user: req.user },
  })),
);
/* *** */

module.exports = app;
