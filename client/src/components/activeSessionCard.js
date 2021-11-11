import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { CREATE_SESSION_CARD } from '../utils/mutations';
import { QUERY_GETSESSIONCARD } from '../utils/queries';
import { Text } from '@chakra-ui/react';
import Auth from '../utils/auth';

// QUERY_GETUSER

const ActiveSessionCard = () => {
  const [var1, setvar1] = useState('');
  // const user = useMutation(QUERY_GETUSER)

  const [createSessionCard, { error }] = useMutation(CREATE_SESSION_CARD, {
    update(cache, { data: { createSessionCard } }) {
      
    try {
        const { activeSessions } = cache.readQuery({ query: QUERY_GETSESSIONCARD });

        cache.writeQuery({
          query: QUERY_GETSESSIONCARD,
          data: { cardInfo: { createSessionCard, ...activeSessions} },
        });
    } 

    catch (e) {
        console.error(e);
    }
    }
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createSessionCard({
        variables: {
            var1,
            // user
        },
      });

      setvar1('');
    } catch (err) {
      console.error(err);
    }
  };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;

  //     if (name === 'thoughtText' && value.length <= 280) {
  //         setvar1(value);
  //         setCount1(value.length);
  //     }
  //   };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <Box 
              width='full'maxWidth='400px' 
              borderWidth={4} borderRadius={4} outline='true'
              h='500px' opacity='0.75'px={4} bgColor='grey'
              padding='5' justifyContent='space-evenly' flexWrap='wrap'/>
        
            {error && (
              <div bg='red' text='white' p='3'>
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <Text fontFamily='Fascinate Inline' fontSize='3xl'>
          You need to be logged in to view this. Please{' '}
          <Link to="/login">LOGIN</Link> or <Link to="/signup">SIGNUP.</Link>
        </Text>
      )}
    </div>
  );
};

export default ActiveSessionCard;

