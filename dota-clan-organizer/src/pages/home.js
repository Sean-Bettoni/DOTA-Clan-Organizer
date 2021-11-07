import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import backgroundPicture from '../photos/DOTAicon.webp';

const coverphoto = backgroundPicture;

function Home() {
    // The return statement contains something called "JSX"
    // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
    // Expressions in JSX should be placed in curly braces {}
    return (
      <Flex>
      <Image alignSelf='center' 
             scr={coverphoto} />
      </Flex>
    );
}

export default Home;


// return (
//   <Box>
//   backgroundImage="url('../public/DOTAicon.webp')"
//   backgroundPosition="center"
//   backgroundRepeat="no-repeat"
//   </Box>

// );