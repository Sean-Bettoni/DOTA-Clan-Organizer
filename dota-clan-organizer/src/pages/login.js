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
      bgColor='#A0A0A0'
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
    <Box textAlign='center'>
      <Heading> Sign Into Your Account</Heading>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box marginY={8} textAlign='center'>
      <form>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type='email' placeholder='Enter your email address'/>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password'/>
        </FormControl>
        <Button backgroundColor='#00B51E' width='full'marginTop={4}>Sign In</Button>
      </form>
    </Box>
  )
}

export default Login;