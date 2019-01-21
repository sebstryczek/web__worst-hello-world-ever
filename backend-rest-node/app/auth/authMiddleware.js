const jwtVerify = require('./jwtVerify');
const handleErrorsAsync = require('../utils/handleErrorsAsync');

const authMiddleware = jwtSecret => async (req,res,next) => {
  const authorization = req.get('authorization');
  const token = authorization.split('Bearer ')[1];

  if (!token) {
    return res.status(403).send({ error: true, message: 'No token provided.' });
  }

  const [ error, decoded ] = await handleErrorsAsync( jwtVerify(token, jwtSecret) );

  if (error) {
    return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
  }

  //const id = decoded.subject;
  //console.log(decoded)
  
  next();
}

module.exports = authMiddleware;
