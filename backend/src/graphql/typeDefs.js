


const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    token: String!
  }

  type Query {
    getUser(userId: ID!): User
  }

  type Mutation {
    createUser(name: String , email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
