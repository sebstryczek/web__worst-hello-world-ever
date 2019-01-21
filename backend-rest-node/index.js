const createServer = require('./app/createServer');
const initialiseDatabase = require('./app/initialiseDatabase');
const handleErrorsAsync = require('./app/utils/handleErrorsAsync');
const config = require('./app/config');

(async () => {
  const { 'db': dbConfig, 'app': appConfig } = config;

  const [ dbError, db ] = await handleErrorsAsync( initialiseDatabase(dbConfig) );
  if (dbError) {
    return console.error(`[DATABASE ERROR]: ${dbError.message}`);
  }
  
  const [ serverError, server ] = await handleErrorsAsync( createServer(db)(appConfig) );
  if (serverError) {
    console.log(`[SERVER ERROR]: ${serverError}`);
    console.log(serverError)
    return
  }

  const port = appConfig.port || 3000;
  server.listen( port, _ => console.log(`Started on port ${port}`) );
  
})();
