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


const SessionCreator = () => {
    return (
      
      <SignupArea/>
    )
}

const SignupArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
      borderWidth={1} px={4} padding='5' 
      width='full' maxWidth='500px' borderRadius={4} 
      textAlign='center' backgroundColor='#730685'>
      <SignupHeader />
      <SignupForm />
      </Box>
    </Flex>
  )
}

const SignupHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading> Create An Account</Heading>
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
        <Button backgroundColor='#00B4BA' bgGradient='linear(#C600FF, #4FF9FF, #0077F5)' width='full'marginTop={4}>Sign In</Button>
      </form>
    </Box>
  )
}


export default SessionCreator;