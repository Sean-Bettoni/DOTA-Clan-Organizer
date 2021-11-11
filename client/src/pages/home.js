import React from 'react';
import { 
  Grid, 
  Box,

} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_GETSESSIONCARD } from '../utils/queries';
import ActiveSessionCard from '../components/activeSessionCard';
import ThoughtList from '../components/sessionCardInfo';
// import backgroundPicture from '../photos/backgroundDOTA-resized.jpg';
// const coverphoto = backgroundPicture;
// <Image alignSelf='center' scr={coverphoto} />



const Home = () => {
  const { loading, data } = useQuery(QUERY_GETSESSIONCARD);
  const sessionCard = data?.activeSessions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ActiveSessionCard />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
            activeSessions={sessionCard}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;



// const Home = () => {
//   return (
//       <HomeGrid/>
//   )
// }

// const HomeGrid = () => {
//   return (
//     <Grid 
//     templateColumns="repeat(5, 1fr)" 
//     gap={6}
//     borderWidth={4}
//     px={4}
//     padding='5'
//     bgColor='grey'
//     opacity='0.75'
//     width='full' maxWidth='500px' borderRadius={4} 
//     >
//           <Box w="100%" h="10" bg="blue.500" />
//           <Box w="100%" h="10" bg="blue.500" />
//           <Box w="100%" h="10" bg="blue.500" />
//           <Box w="100%" h="10" bg="blue.500" />
//           <Box w="100%" h="10" bg="blue.500" />
//     </Grid>
//   )
// }

// export default Home;

