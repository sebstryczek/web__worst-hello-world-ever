const mongodb = require('mongodb');
const { COLLECTION_NAME } = require('./users.consts');

const usersController = db => {
  const index = async (req, res, next) => {
    const collection = db.collection( COLLECTION_NAME );
    const users = await collection.find().toArray();
    return res.status(200).json(users);
  };
  
  const create = async (req, res, next) => {
    const { email, password } = req.body;
    const collection = db.collection( COLLECTION_NAME );
    const result = await collection.insert({ email, password });
    return res.status(200).json(result.ops);
  };
  
  const get = async (req, res, next) => {
    const userId = mongodb.ObjectId( req.params.id );
    const collection = db.collection( COLLECTION_NAME );
    const user = await collection.findOne( userId );
    return res.status(200).json(user);
  };
  
  const update = async (req, res, next) => {
    const userId = mongodb.ObjectId( req.params.id );
    const { email, password } = req.body;
    const collection = db.collection( COLLECTION_NAME );
    const user = await collection.findOneAndUpdate({ _id: userId }, {$set: { 'email': email, password }});
    return res.status(200).json(user);
  };
  
  const destroy = async (req, res, next) => {
    const userId = mongodb.ObjectId( req.params.id );
    const collection = db.collection( COLLECTION_NAME );
    await collection.deleteOne({ _id: userId });
    return res.status(200).json();
  };

  return { index, create, get, update, destroy }
}

module.exports = usersController;
