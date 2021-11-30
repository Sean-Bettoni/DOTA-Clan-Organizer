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
import { LOGIN_USER } from '../utils/mutations';

import React, { useState } from 'react';


const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: ''});
  const [login, {error, data}] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


    // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
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
            <Heading fontFamily='Fascinate Inline'> Sign Into Your Account</Heading>
          </Box>
          <div className="card-body">
            {data ? (
              <p>
                Success! Taking you{' '}
                <Link to="/home">to the homepage.</Link>
              </p>
            ) : (
              
              <FormControl isRequired>
              <form onSubmit={handleFormSubmit}>

              <Box marginY={8} textAlign='center'>
                <FormLabel fontFamily='Righteous'>Username</FormLabel>
                <Input
                  className="form-input"
                  focusBorderColor="lime"
                  fontFamily='Righteous'
                  placeholder="Your Username"
                  name="username"
                  type="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                

                
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
                

                <Button
                  _hover={{backgroundColor:'lime'}}
                  width='full'marginTop={4}
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </Button>
                </Box>
              </form>
              </FormControl>
              
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

export default Login;
