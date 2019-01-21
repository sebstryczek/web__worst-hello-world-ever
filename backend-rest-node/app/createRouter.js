const express = require('express');

const createRouter = db => appConfig => {
  const router = express.Router();
  const authMiddleware = require('./auth/authMiddleware')(appConfig.jwtSecret)

  router.use( '/auth', require('./routes/auth')(db)(appConfig) );
  router.use( '/users', authMiddleware, require('./routes/users')(db) );

  // router.route('/')
  //   .get((req, res) => {
  //     const obj = {
  //       status: 200
  //     };
  //     res.status(200).json(obj);
  //   });
  
  return router;
}

module.exports = createRouter;
