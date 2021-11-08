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


const Signup = () => {
    return (
        <SignupArea/>  
    )
}

const SignupArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
      borderWidth={4} px={4} padding='5'
      bgColor='grey'
      opacity='0.75' 
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
      <Heading fontFamily='Fascinate Inline'>Create An Account</Heading>
    </Box>
  )
}

const SignupForm = () => {
  return (
    <Box marginY={8} textAlign='center'>
      <form>
        <FormControl>
          <FormLabel fontFamily='Righteous'>Email Address</FormLabel>
          <Input type='email' focusBorderColor="lime"/>
        </FormControl>
        
        <FormControl>
          <FormLabel fontFamily='Righteous'>Password</FormLabel>
          <Input type='password' focusBorderColor="lime"/>
        </FormControl>

        <FormControl>
        <FormLabel fontFamily='Righteous'>Display Name</FormLabel>
          <Input type='displayName' focusBorderColor="lime"/>
        </FormControl>
        <Button  _hover={{backgroundColor:'lime'}} width='full'marginTop={4} fontFamily='Righteous'>Sign In</Button>
      </form>
    </Box>
  )
}


export default Signup;