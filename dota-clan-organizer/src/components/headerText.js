import React from 'react';
import { Box, Flex, Button, Spacer, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function HeaderText() {
  return ( 
    
    <Flex w='100%' h="100" bg="" textColor='grey.800'>
    <Box />
    <Button variant='Link' justifySelf='flex-start' _hover={{backgroundColor:'grey'}}>
      LOGIN
    </Button>
    
    <Button variant='Link' justifySelf='flex-start' _hover={{backgroundColor:'grey'}}>
      SIGN UP
    </Button>
    <Spacer />

    <Box textAlign='start'/>
    <Heading justifyContent='flex-start' fontSize='7xl'fontFamily='sans-serif' >
    Circle Of Life Clan Website
    </Heading>
    <Spacer />
    
    <Box justifySelf='flex-end'p='10px'/>
    <ColorModeSwitcher/>
    </Flex>
      
  );
  }

export default HeaderText;
