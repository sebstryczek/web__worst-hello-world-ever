const app = require('./src/app');
const config = require('./src/config');

/* Start the server */
const port = config.app.port || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
/* *** */
