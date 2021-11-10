import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input,
  Button,
  Image
} from '@chakra-ui/react';


const Login = () => {
    return (
        <LoginArea/>
    )
}

const LoginArea = () => {
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
      <LoginHeader />
      <LoginForm />
      </Box>
    </Flex>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center' outline='true'>
      <Heading fontFamily='Fascinate Inline'> Sign Into Your Account</Heading>
    </Box>
  )
}

const LoginForm = () => {
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
        <Button  _hover={{backgroundColor:'lime'}} width='full'marginTop={4} fontFamily='Righteous'>Sign In</Button>
      </form>
    </Box>
  )
}

export default Login;

