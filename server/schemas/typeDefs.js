const { gql } = require('apollo-server-express');

// Defining the fields GraphQL can request from the Session
// GraphQL equivalent of defining a model
// Blueprint
const typeDefs = gql`
  type SessionCard {
    _id: ID!
    gameType: String!
    requiredRole: String!
    startTime: Number!
  }

  type User {
    _id: ID!
    name: String!
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;
// type Query is defining what the front end is allowed to query for and what it gets back

module.exports = typeDefs;
