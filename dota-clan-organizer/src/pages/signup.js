import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input,
  Button,
  Image,
} from '@chakra-ui/react';

// import { extendTheme } from "@chakra-ui/react";

const Signup = () => {
    return (
      <Box>
        <SignupArea/>
      </Box>  
    )
}

const SignupArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
      borderWidth={1} px={4} padding='5' 
      width='full' maxWidth='500px' borderRadius={4} 
      textAlign='center'>
      <Image src='https://m.media-amazon.com/images/I/41fOv4JH2fL.jpg' 
      boxSize='300px' 
      mx='auto'
      my={6}
      borderRadius='full'
      />
      <SignupHeader />
      <SignupForm />
      </Box>
    </Flex>
  )
}

const SignupHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Create An Account</Heading>
    </Box>
  )
}

const SignupForm = () => {
  return (
    <Box marginY={8} textAlign='center'>
      <form>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type='email' placeholder='Enter your Steam email address'/>
        </FormControl>
        
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password'/>
        </FormControl>

        <FormControl>
        <FormLabel>Display Name</FormLabel>
          <Input type='displayName' placeholder='Enter your DOTA name'/>
        </FormControl>
        <Button backgroundColor='#00B4BA' width='full'marginTop={4}>Sign In</Button>
      </form>
    </Box>
  )
}


export default Signup;