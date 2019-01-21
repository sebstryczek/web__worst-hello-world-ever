const usersTypeDefs = `
  type User {
    id: Int!
    email: String!
    password: String!
  }

  extend type Query {
    me: User
    users: [User]
  }
`;

module.exports = usersTypeDefs;
