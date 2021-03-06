const { AuthenticationError } = require('apollo-server-errors');
const { SessionCard, User } = require('../models');
const { signToken } = require("../utils/auth");
// const sessionCardSeeds = require('../seeds/sessionCardSeeds.json');


// Resolvers are functions that fulfills the queries defined in `typeDefs.js`
// How blueprint will be fulfilled
const resolvers = {
  Query: {
    sessionCards: async () => {
      // Get and return all documents from the SessionCard collection
      return await SessionCard.find({});
      // return await sessionCardSeeds.find[{}];
    },
    
    user: async (parent, {username}) => {
      return await User.findOne({username});
    }, 
  },

  // Defining which mutations the client is allowed to make
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      
      if (!user) {
        throw new AuthenticationError('Incorrect Details');
      }
      
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Details');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },

    createSessionCard: async (parent, { gameType, requiredRoles, startTime }) => {
      const card = await SessionCard.create({gameType, requiredRoles, startTime})
      return card
    },
  },
};

module.exports = resolvers;


// Equivalent to an API endpoint
// Request to graphQL, in body of request

