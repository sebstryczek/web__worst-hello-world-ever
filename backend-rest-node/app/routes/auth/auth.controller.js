const handleErrorsAsync = require('../../utils/handleErrorsAsync');
const generateToken = require('../../auth/generateToken');

const authController = db => appConfig => {
  const userModel = require('../users/user.model')(db);
  const tokenList = {}

  const signUp = async (req, res, next) => {
    const { email, password } = req.body;
    const [ error, user ] = await handleErrorsAsync(userModel.create({ email, password }));
    if (error) {
      switch (error.code) {
        case 11000: return res.status(403).json({ error: 'Email is already in use' });
        default: return res.status(403).json({ error: 'Database error' });
      }
    }

    const id = user._id;
    const token = generateToken(id, appConfig.jwtSecret, appConfig.jwtTokenLife);
    const refreshToken = generateToken(id, appConfig.jwtRefreshSecret, appConfig.jwtRefreshTokenLife);
    const response = { token, refreshToken };
    tokenList[refreshToken] = response;
    
    res.status(200).json( response );
  }

  const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    const [ error, user ] = await handleErrorsAsync(userModel.getAuthenticated(email, password));
    if (error) {
      return res.status(403).json({ error: error.message });
    }

    const id = user._id
    const token = generateToken(id, appConfig.jwtSecret, appConfig.jwtTokenLife);
    const refreshToken = generateToken(id, appConfig.jwtRefreshSecret, appConfig.jwtRefreshTokenLife);
    const response = { token, refreshToken };
    tokenList[refreshToken] = response

    res.status(200).json( response );
  }

  const refreshToken = async (req, res, next) => {
    const { refreshToken, email } = req.body;
    const [ error, user ] = await handleErrorsAsync(userModel.findOne({ email }));
    if (error) {
      return res.status(403).json({ error: error.message });
    }
    
    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }

    if (!refreshToken || !(refreshToken in tokenList)) {
      return res.status(404).json({ error: 'Invalid request' })
    }
    const id = user._id;
    const token = generateToken(id, appConfig.jwtSecret, appConfig.jwtTokenLife);
    tokenList[ refreshToken ].token = token
    res.status(200).json({ token });
  }

  return { signIn, signUp, refreshToken }
}

module.exports = authController;
