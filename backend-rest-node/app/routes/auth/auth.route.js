const express = require('express');
const routeHandleErrorsAsync = require('../../utils/routeHandleErrorsAsync')

const authRoute = db => generateToken => {
  const controller = require('./auth.controller')(db)(generateToken);
  const router = express.Router();
  
  router.route('/signUp')
    .post( routeHandleErrorsAsync(controller.signUp) );

  router.route('/signIn')
    .post( routeHandleErrorsAsync(controller.signIn) );

  return router;
}

module.exports = authRoute;
