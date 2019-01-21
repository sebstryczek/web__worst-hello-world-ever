const { makeExecutableSchema } = require('graphql-tools');
const withAuth = require('./withAuth');
const authResolvers = require('./auth/auth.resolvers');
const authTypeDefs = require('./auth/auth.typeDefs');
const usersResolvers = require('./users/users.resolvers');
const usersTypeDefs = require('./users/users.typeDefs');

const typeDefs = [
  `
    type Query {
      test: [Int]
    }
    type Mutation {
      test: [Int]
    }
  `,
  authTypeDefs,
  usersTypeDefs,
]

const resolvers = [
  {
    Query: {
    },
    Mutation: {
    },
  },
  authResolvers,
  withAuth( usersResolvers ),
]

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = {
  schema,
}