import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';



// import { Logo } from './Logo';
import NavBar from './components/NavBar';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import SessionCreator from './pages/sessionCreator';


function App() {
  return (
    <ChakraProvider>
      <Box backgroundImage='https://i.pinimg.com/originals/e7/03/1a/e7031acca9a34bc69a460796feb5194d.jpg'
      bgSize='100%'
      backgroundRepeat='no-repeat' 
      >
      <NavBar/>  
      <Home/>
      
      <Signup/>
      </Box>
    </ChakraProvider>
  );
}

export default App;

// Similar to the index.js file although in this you can wrap multiple elements 
// inside a <div> </div>. Chakra ui Box element is a div

