const express = require('express');
const routeHandleErrorsAsync = require('../../utils/routeHandleErrorsAsync')

const usersRoute = db => {
  const controller = require('./users.controller')(db);
  const router = express.Router();

  router.route('/')
    .get( routeHandleErrorsAsync(controller.index) )
  
  router.route('/:id')
    .get( routeHandleErrorsAsync(controller.get) )
    .patch( routeHandleErrorsAsync(controller.update) )
    .delete( routeHandleErrorsAsync(controller.destroy ));

  return router;
}

module.exports = usersRoute;
