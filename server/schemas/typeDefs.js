const { gql } = require('apollo-server-express');

// Defining the fields GraphQL can request from the Session
// GraphQL equivalent of defining a model
// Blueprint
const typeDefs = gql`
  type SessionCard {
    gameType: String!
    requiredRole: String!
    startTime: Number!
  }

  type User {
    _id: ID
    email: String!
    username: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    activeSession: [SessionCard]
    user(username: String!): User
    login(email: String!, password: String!)

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, username: String!, password: String!): Auth
    createSessionCard(gameType: String!, requiredRole: String!, startTime: Number!): Auth
  }
`;
// type Query is used for getting data
// type Mutation is used for changing data

module.exports = typeDefs;