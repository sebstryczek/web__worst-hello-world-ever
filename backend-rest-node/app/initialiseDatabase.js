const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;


const mongoose = require('mongoose');

const initialiseDatabase = async dbConfig => {

  const { host, port, database, username, password } = dbConfig;

  const connString = `mongodb://${username}:${password}@${host}:${port}/${database}`;
  const connOptions = { useNewUrlParser: true, useCreateIndex: true };

  const db = await mongoose.connect(connString, connOptions);

  //const connection = await mongoClient.connect(connString, connOptions);
  //const db = connection.db(database);
  //connection.close();

  return db;
}

module.exports = initialiseDatabase;
