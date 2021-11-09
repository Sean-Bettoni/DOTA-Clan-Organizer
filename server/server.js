const express = require('express');
// Importing the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// Importing the two parts of a GraphQL Schema
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();



// Creating a new instance of the ApolloServer with the GraphQL Schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Applying the Apollo middleware to our requests
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
