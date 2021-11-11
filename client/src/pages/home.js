import React from 'react';
import { 
  Flex, 
  Grid,
  Box,
} from '@chakra-ui/react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GETSESSIONCARD } from '../utils/queries';
import ActiveSessionCard from '../components/activeSessionCard';


const Home = () => {
  const { loading, data } = useQuery(QUERY_GETSESSIONCARD);
  const sessionCard = data?.activeSessions || [];

  // const getCard = useQuery(QUERY_GETSESSIONCARD);
  // const cardInfo = useMutation(CREATE_SESSION_CARD);


  return (
  <Flex 
    minHeight='100vh' 
    width='full' 
    align='center' 
    justifyContent='center'
    flexDir='row'
  >
    {loading ? (
    <div>Loading...</div>
    ) : (
     <ActiveSessionCard activeSessions={sessionCard}/>
    )}

  </Flex>
  );
};

export default Home;