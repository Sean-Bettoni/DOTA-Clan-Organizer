import React from 'react';
import { Box, Flex, Button, Spacer, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function NavBar() {

  // fetch user

  // If no user is signed in
  const user = undefined;

  //If user is signed in
  // const user = [];

  const buttons = [
    {
      title: 'SIGN UP',
      to: "", //Page end location
      show: () => {
        // logic to return false
        return !Boolean(user);

      }
    },
    {
      title: 'LOGIN',
      to: "",
      show: () =>{
        // ..
        // If there is no user return LOGIN button
        return !Boolean(user);
      }
    },
    {
      title: 'CREATE',
      to: "",
      show: () =>{
        // ..
        // If there is a user return LOGOUT button
        return Boolean(user);
      }
    },
    {
      title: 'LOGOUT',
      to: "",
      show: () =>{
        // ..
        // If there is a user return LOGOUT button
        return Boolean(user);
      }
    }
  ]


  return ( 
    <Flex w='100%' h="100" bg="" textColor='grey.800'>
    <ColorModeSwitcher/>
    <Box />
    {buttons.map(button => {
      // If button is not showing, return null
      if(!button.show()){
        return null;
      }
      // Otherwise If button returns true, show button
      return (
        <Button variant='Link' justifySelf='flex-start' _hover={{backgroundColor:'lime'}} fontFamily='Fascinate Inline'>
          {button.title}
        </Button>
      )
    })}
    

    <Spacer />

    <Box textAlign='center'/>
    <Heading justifyContent='flex-start' fontSize='7xl' fontFamily='Fascinate Inline' paddingRight='10%' textDecorationLine='underline'>
    Circle Of Life Clan Website
    </Heading>
    <Spacer />
    
    <Box justifySelf='flex-end'p='10px'/>
    </Flex> 
  );
}

export default NavBar;