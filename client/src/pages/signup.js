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
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import React, { useState } from 'react';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


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
      <div className="card">
        <Box textAlign='center' outline='true'>
          <Heading fontFamily='Fascinate Inline'> Create An Account</Heading>
        </Box>
        <div className="card-body">
          {data ? (
            <p>
              Success! Taking you{' '}
              <Link to="/home">to the homepage.</Link>
            </p>
          ) : (
            <Box marginY={8} textAlign='center'>
            <form onSubmit={handleFormSubmit}>

            <FormControl>
              <FormLabel fontFamily='Righteous'>Display Name</FormLabel>
              <Input
                className="form-input"
                focusBorderColor="lime"
                fontFamily='Righteous'
                placeholder="Your Display Name"
                name="username"
                type="username"
                value={formState.username}
                onChange={handleChange}
              />
              </FormControl>


              <FormControl>
              <FormLabel fontFamily='Righteous'>Email Address</FormLabel>
              <Input
                className="form-input"
                focusBorderColor="lime"
                fontFamily='Righteous'
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              </FormControl>


              <FormControl>
              <FormLabel fontFamily='Righteous'>Password</FormLabel>
              <Input
                className="form-input"
                focusBorderColor="lime"
                fontFamily='Righteous'
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              </FormControl>

              <Button
                _hover={{backgroundColor:'lime'}}
                width='full'marginTop={4}
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </Button>

            </form>
            </Box>
          )}

          
          {error && (
            <div my='3' p='3' bg-='red' text='white'>
              {error.message}
            </div>
          )}
        </div>
      </div>
    </Box>
  </Flex>
);
};

export default Signup;
