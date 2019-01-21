const express = require('express');
const routeHandleErrorsAsync = require('../../utils/routeHandleErrorsAsync')

const authRoute = db => appConfig => {
  const controller = require('./auth.controller')(db)(appConfig);
  const router = express.Router();
  
  router.route('/signUp')
    .post( routeHandleErrorsAsync(controller.signUp) );

  router.route('/signIn')
    .post( routeHandleErrorsAsync(controller.signIn) );

  router.route('/refreshToken')
    .post( routeHandleErrorsAsync(controller.refreshToken) );

  return router;
}

module.exports = authRoute;
