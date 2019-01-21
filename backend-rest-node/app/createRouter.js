const express = require('express');

const createRouter = db => ({ generateToken, authMiddleware }) => {
  const router = express.Router();
  router.use( '/auth', require('./routes/auth')(db)(generateToken) );
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
