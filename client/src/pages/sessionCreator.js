import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input,
  Button,
} from '@chakra-ui/react';


const SessionCreator = () => {
    return (
      <CreatorCard/>
    )
}

const CreatorCard = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
      borderWidth={4} px={4} padding='5'
      bgColor='#A0A0A0'
      opacity='0.75'
      width='full' maxWidth='500px' borderRadius={4} 
      textAlign='center'>
      <SessionHeader />
      <SessionForm />
      </Box>
    </Flex>
  )
}

const SessionHeader = () => {
  return (
    <Box textAlign='center' outline='true'>
      <Heading fontFamily='Fascinate Inline'>Create A Session</Heading>
    </Box>
  )
}

const SessionForm = () => {
  return (
    <Box marginY={8} textAlign='center'>
      <form>
        <FormControl>
          <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
          <Input type='game' focusBorderColor="lime"/>
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
          <Input type='role' focusBorderColor="lime"/>
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
          <Input type='time' focusBorderColor="lime"/>
        </FormControl>

        <Button backgroundColor='#00B51E' width='full'marginTop={4} fontFamily='Righteous'>Create Session</Button>
      </form>
    </Box>
  )
}

export default SessionCreator;