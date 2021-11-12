import React, {useState, useEffect } from 'react'; 
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_GETSESSIONCARD } from '../utils/queries';
import { CREATE_SESSION_CARD } from '../utils/mutations';
import ActiveSessionCard from '../components/activeSessionCard';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';



const Home = () => {
  const { loading, data } = useQuery(QUERY_GETSESSIONCARD);
  
  const sessionCardData = data?.activeSessions || [];

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
    <div>Loading...</div> // Can use an icon to display loading here instead of the text
    ) : (
     <ActiveSessionCard activeSessions={sessionCardData}/>
    )}

  </Flex>
  );
};

export default Home;








// import React from 'react';
// import { 
//   Flex, 
//   Grid,
//   Box,
// } from '@chakra-ui/react';
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_GETSESSIONCARD } from '../utils/queries';
// import ActiveSessionCard from '../components/activeSessionCard';


// const Home = () => {
//   const { loading, data } = useQuery(QUERY_GETSESSIONCARD);
//   const sessionCard = data?.activeSessions || [];

//   // const getCard = useQuery(QUERY_GETSESSIONCARD);
//   // const cardInfo = useMutation(CREATE_SESSION_CARD);


//   return (
//   <Flex 
//     minHeight='100vh' 
//     width='full' 
//     align='center' 
//     justifyContent='center'
//     flexDir='row'
//   >
//     {loading ? (
//     <div>Loading...</div>
//     ) : (
//      <ActiveSessionCard activeSessions={sessionCard}/>
//     )}

//   </Flex>
//   );
// };

// export default Home;