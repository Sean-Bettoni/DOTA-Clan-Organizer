import React from 'react';
// import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';


import ActiveSessionCard from '../components/activeSessionCard';

import { useQuery } from '@apollo/client';
import { QUERY_GETSESSIONCARDS } from '../utils/queries'



const Home = () => {
  const { loading, data } = useQuery(QUERY_GETSESSIONCARDS);
  const sessionCards = data?.sessionCards || [];


  return (
    <Box>
      
      <Box>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ActiveSessionCard
          sessionCards={sessionCards}
          />
        )}
      </Box>
    
    </Box>
  );
};

export default Home;




// const Home = () => {
//   // const { username: userParam } = useParams();


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











// import React from 'react'; 
// import { Flex } from '@chakra-ui/react';
// import { useQuery } from '@apollo/client';
// import { QUERY_GETSESSIONCARD } from '../utils/queries';
// import ActiveSessionCard from '../components/activeSessionCard';



// const Home = () => {
//   // const { loading, data } = useQuery(QUERY_GETSESSIONCARD, {
//   //   variables: {
//   //     gameType: gameType,
//   //     requiredRoles: requiredRoles,
//   //     startTime: startTime,
//   //   }
//   // });
//   // const sessionCardData = data?.activeSessions || [];

//   const { loading } = useQuery('seededCardData', QUERY_GETSESSIONCARD)
 

//   return (
  
//   <Flex 
//     minHeight='100vh' 
//     width='full' 
//     align='center' 
//     justifyContent='center'
//     flexDir='row'
//   >
//     {loading ? (
//     <div>Loading...</div> // Can use an icon to display loading here instead of the text
//     ) : (
//      <ActiveSessionCard
//      title='Here are the upcomming Sessions'/>
//     )}

//   </Flex>
//   );
// };

// export default Home;






//   return (
  
//   <Flex 
//     minHeight='100vh' 
//     width='full' 
//     align='center' 
//     justifyContent='center'
//     flexDir='row'
//   >
//     {loading ? (
//     <div>Loading...</div> // Can use an icon to display loading here instead of the text
//     ) : (
//      <ActiveSessionCard activeSessions={sessionCardData}
//      title='Here are the upcomming Sessions'/>
//     )}

//   </Flex>
//   );
// };

// export default Home;

