const { COLLECTION_NAME } = require('../users/users.consts');

const authController = db => generateToken => {
  const signUp = async (req, res, next) => {
    const { email, password } = req.body;
  
    const collection = db.collection( COLLECTION_NAME );
    const foundUser = await collection.findOne({ email });
    
    if (foundUser) {
      return res.status(403).json({ error: 'Email is already in use'});
    }

    const result = await collection.insertOne({ email, password });
    const id = result.ops[0]._id
    const token = generateToken( id );

    res.status(200).json({ token });
  }

  const signIn = async (req, res, next) => {
    const { email, password } = req.body;
  
    const collection = db.collection( COLLECTION_NAME );

    //SPRAWDZIĆ
    const foundUser = await collection.findOne({ email, password });

    if (!foundUser) {
      return res.status(401).json({ error: 'Unauthorized access.' } );
    }

    const id = foundUser._id
    const token = generateToken( id );

    res.status(200).json({ token });
  }

//   router.post('/token', (req,res) => {
//     // refresh the damn token
//     const postData = req.body
//     // if refresh token exists
//     if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
//         const user = {
//             "email": postData.email,
//             "name": postData.name
//         }
//         const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//         const response = {
//             "token": token,
//         }
//         // update the token in the list
//         tokenList[postData.refreshToken].token = token
//         res.status(200).json(response);        
//     } else {
//         res.status(404).send('Invalid request')
//     }
// })

  return { signIn, signUp }
}

module.exports = authController;
