// Removed Auth as it was stopping page rendering

import React from 'react';
import { Box, Flex, Button, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';



const NavBar = () => {
 
  const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  };

  return (
    <Flex w='100%' textColor='grey.800' >
    <ColorModeSwitcher/>
    <Box textAlign='center' />

          {/* {Auth.loggedIn() ? (
            <> */}
              {/* <Link to="/home">
                {Auth.login()}
              </Link> */}
              
              <Button 
                justifySelf='flex-start' 
                backgroundColor='transparent' 
                _hover={{backgroundColor:'lime'}} 
                fontFamily='Fascinate Inline' 
                padding='2' height='40px'>
              <Link to='/home'>    
                HOME
              </Link>
              </Button>
             
              
              <Button 
                justifySelf='flex-start' 
                backgroundColor='transparent' 
                _hover={{backgroundColor:'lime'}} 
                fontFamily='Fascinate Inline' 
                padding='2' height='40px'>
              <Link to='/sessioncreator'>
                CREATE
              </Link> 
              </Button>
            {/* </>
          ) : (
            <> */}
            <Button 
                justifySelf='flex-start' 
                backgroundColor='transparent' 
                _hover={{backgroundColor:'lime'}} 
                fontFamily='Fascinate Inline' 
                padding='2' height='40px'>
              <Link to="/login">
                LOGIN
              </Link>
            </Button>

            <Button 
                justifySelf='flex-start' 
                backgroundColor='transparent' 
                _hover={{backgroundColor:'lime'}} 
                fontFamily='Fascinate Inline' 
                padding='2' height='40px'>
              <Link to="/signup">
                SIGNUP
              </Link>
            </Button>

            <Button 
                justifySelf='flex-start' 
                backgroundColor='transparent' 
                _hover={{backgroundColor:'lime'}} 
                fontFamily='Fascinate Inline' 
                padding='2' height='40px'
                onClick={logout}>
              <Link to="/login">  
                LOGOUT
              </Link>
            </Button>


            {/* </>
          )} */}
        <Spacer/>
          <Heading justifyContent='flex-start' 
            fontSize='7xl' fontFamily='Fascinate Inline' 
            paddingRight='10%' 
            textDecorationLine='underline'>
            Circle Of Life Clan Website
          </Heading>
        <Spacer/>
        <Box justifySelf='flex-end'p='10px'/>

    </Flex>
  );
};

export default NavBar;