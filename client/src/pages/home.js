import React from 'react';
import { 
  Grid, 
  Box,

} from '@chakra-ui/react';
// import backgroundPicture from '../photos/backgroundDOTA-resized.jpg';

// const coverphoto = backgroundPicture;
// <Image alignSelf='center' scr={coverphoto} />

const Home = () => {
  return (
      <HomeGrid/>
  )
}

const HomeGrid = () => {
  return (
    <Grid 
    templateColumns="repeat(5, 1fr)" 
    gap={6}
    borderWidth={4}
    px={4}
    padding='5'
    bgColor='grey'
    opacity='0.75'
    width='full' maxWidth='500px' borderRadius={4} 
    >
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
    </Grid>
  )
}








export default Home;

