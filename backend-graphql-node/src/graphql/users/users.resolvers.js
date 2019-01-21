const { User } = require('../../database/models');

const usersResolvers = {
  Query: {
    me: (obj, args, context, info) => User.findById(context.user.id)
  }
}

module.exports = usersResolvers;
