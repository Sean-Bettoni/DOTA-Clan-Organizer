import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'; 
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import NavBar from './components/NavBar';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import SessionCreator from './pages/sessionCreator';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <ChakraProvider>
        <Box backgroundImage='https://i.pinimg.com/originals/e7/03/1a/e7031acca9a34bc69a460796feb5194d.jpg' bgSize='100%' backgroundRepeat='no-repeat'>  
          
          <NavBar/>
          
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/sessioncreator">
            <SessionCreator/>
          </Route>

        </Box>  
      </ChakraProvider>
    </Router>
  </ApolloProvider>
  );
}

export default App;



// Similar to the index.js file although in this you can wrap multiple elements 
// inside a <div> </div>. Chakra ui Box element is a div

