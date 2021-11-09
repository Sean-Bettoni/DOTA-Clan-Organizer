const { AuthenticationError } = require('apollo-server-errors');
const { SessionCard, User } = require('../models');

// Resolvers is a functions that fulfills the queries defined in `typeDefs.js`
// How blueprint will be fulfilled
const resolvers = {
  Query: {
    activeSessions: async () => {
      // Get and return all documents from the SessionCard collection
      return await SessionCard.find({});
    }
  },
  Mutation: {
    login: async (parent, { email, username, password }) => {
      
      const email = await email.findOne({ email });
      if (!email) {
        throw new AuthenticationError('Incorrect Details');
      }

      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Incorrect Details');
      }
      
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Details');
      }
    },

    signUp: async (parent, { email, username, password }) => {

      const user = await User.create({ email, username, password });
        return user;
    },

    createSessionCard: async (parent, { gameType, requiredRoles, startTime }) => {
      const card = await SessionCard.create({gameType, requiredRoles, startTime});
      return card;
    },
  },
};

module.exports = resolvers;


// Equivalent to an API endpoint
// Request to graphQL, in body of request