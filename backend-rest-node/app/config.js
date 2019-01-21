
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';

console.info('ENV: ', env);

dotenv.config({
  path: `.env.${ env }`,
  silent: env === 'production' 
});

module.exports = {
  app: {
    port: process.env.APP_PORT,
    jwtSecret: process.env.JWT_SECRET,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  }
}
