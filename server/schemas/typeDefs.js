const { gql } = require('apollo-server-express');

// Defining the fields GraphQL can request from the Session
// GraphQL equivalent of defining a model
// Blueprint
const typeDefs = gql`
  type User {
    _id: ID
    email: String!
    username: String!
    password: String!
  }

  type SessionCard {
    gameType: String!
    requiredRoles: String!
    startTime: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    activeSessions: [SessionCard]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, username: String!, password: String!): Auth
    createSessionCard(gameType: String!, requiredRoles: String!, startTime: String!): SessionCard
  }
`;
// type Query is used for getting data
// type Mutation is used for changing data

module.exports = typeDefs;