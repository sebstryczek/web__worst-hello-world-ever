const routeHandleErrorsAsync = fn => (req, res, next) =>
  fn(req, res, next)
    //.then(results => next(results))
    .catch(error => {
      console.log(`[ROUTE ERROR]: ${error}`);
      console.log(error)
      //next(error);
      return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });

  // For controllers functions that return query call prmise instead of result by res.status.json
  // fn()
  //   .then(results => res.status(200).json(results))
  //   .catch(error => {
  //     console.error(error.message);
  //     res.status(500).json({ status: 500, message: 'Internal Server Error' })
  //   });

module.exports = routeHandleErrorsAsync;
