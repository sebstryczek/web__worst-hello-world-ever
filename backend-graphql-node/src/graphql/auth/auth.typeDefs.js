const authTypeDefs = `
  extend type Mutation {
    signup (email: String!, password: String!): String
    login (email: String!, password: String!): String
  }
`;

module.exports = authTypeDefs;
