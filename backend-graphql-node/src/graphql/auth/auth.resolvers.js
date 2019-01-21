const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config');
const { User } = require('../../database/models');

const getToken = ({ id, email }) => jsonwebtoken.sign(
  { id, email },
  config.app.jwtSecret,
  { expiresIn: '1y' }
);

const authResolvers = {
  Mutation: {
    async signup(_, { email, password }) {
      const user = await User.create({
        email,
        password: await bcrypt.hash(password, 10)
      })

      return getToken(user);
    },

    async login(_, { email, password }) {
      const user = await User.findOne({ where: { email } })

      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }
      
      return getToken(user);
    }
  }
};

module.exports = authResolvers;
