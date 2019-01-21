const handleErrorsAsync = promise => (
  promise
    .then(result => ([ null, result ]))
    .catch(error => ([ error, null ]))
);

module.exports = handleErrorsAsync;
