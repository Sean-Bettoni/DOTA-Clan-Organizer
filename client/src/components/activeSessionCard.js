import React from 'react';
import { Flex, Stack, Heading, Box, Grid, FormLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import backgroundIMG from '../photos/dotaHeroesTile2.png'

// const ActiveSessionCard = ({ gameType, requiredRoles, startTime = [] }) => {
const ActiveSessionCard = ({ sessionCards }) => {

  // const cardInfo = useQuery(QUERY_GETSESSIONCARD);
  // In return field <textarea name='Game Type' value={cardInfo.gameType}></textarea>

  
  if (!sessionCards.length) {
    return <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
    <Box
    width='full'
    maxWidth='500px'
    borderRadius={4}
    borderWidth={4} 
    padding='5'
    style={{backgroundImage: `url(${backgroundIMG})`}}
    // bgColor='#A0A0A0'
    opacity='0.75'
    textAlign='center'
    >
      {/* <Image 
      src='../../photos/dotaIconSmall.png'
      mx='auto'
      my={6}
      /> */}
    <FormLabel fontFamily='Righteous' fontSize='5xl' textAlign='center'>
      There are currently no <br></br> upcomming sessions, <br></br> Please <Link to ='/sessioncreator'><u>CREATE</u></Link> one</FormLabel>
    </Box>
    </Flex>
  }


  return (
    <Flex
    align={'center'}
    justify={'center'}
    >
      <Stack>
        {sessionCards.map((sessionCards) => (
          <Grid
          templateColumns='repeat(5, 1fr)'
          gap={5} 
          key={sessionCards._id}
          >
            <Box>
              <Heading textAlign={'flex-start'}>{sessionCards.gameType}</Heading>
              <h3>{sessionCards.requiredRoles}</h3>
                <h3>{sessionCards.startTime}</h3>
            </Box>
          </Grid>  
        ))}
      </Stack>
    </Flex>
  )
};

export default ActiveSessionCard;






// This code displays no session message

// // const ActiveSessionCard = ({ gameType, requiredRoles, startTime = [] }) => {
//   const ActiveSessionCard = ({ gameType, requiredRoles, startTime }) => {
  
//     // const createSessionCard = useMutation(CREATE_SESSION_CARD);
  
//     if (!gameType) {
//       return <Box>
//       <FormLabel fontFamily='Fascinate Inline' fontSize='5xl' textAlign='center'>
//         There are currently no <br></br> upcomming sessions, <br></br> Please <Link to ='/sessioncreator'>CREATE</Link> one</FormLabel>
//       </Box>
//     }
//     // if (!requiredRoles) {
//     //   return <h3>No Required Roles</h3>
//     // }
  
//     // if (!startTime) {
//     //   return <h3>No Start Time</h3>
//     // }
  
//     return (
//       <Box>
//         <Form>
  
//           <Box>
//           <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
//             <textarea name='Game Type' value={createSessionCard.gameType}>
//             </textarea>
//           </Box>
  
//           <Box>
//           <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
//             <textarea name='Required Roles' value={createSessionCard.requiredRoles}>
//             </textarea>
//           </Box>
  
//           <Box>
//           <FormLabel fontFamily='Righteous'>Start Time</FormLabel>
//             <textarea name='Start Time' value={createSessionCard.startTime}>
//             </textarea>
//           </Box>
  
//         </Form>
//       </Box>
//     )
//   };
//   export default ActiveSessionCard;
  
  
  
  










// const ActiveSessionCard = () => {
  
//   const [formState, setFormState] = useState({
//     gameType: '',
//     requiredRoles:'',
//     startTime:''
//   });

//   const createSessionCard = useMutation(CREATE_SESSION_CARD);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = createSessionCard({
//         variables: { ...formState },
//       });

//       window.location.reload();
//     } 
//     catch (err) {
//       console.error(err);
//     }
//   };


//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'gameTpye' && value.length <= 280) {
//       setFormState({ ...formState, [name]: value }); 
//     } 
//     else if (name !== 'gameTpye') {
//       setFormState({ ...formState, [name]: value });
//     }
//   };

//   return (
//     <Box>
//       <Form onSubmit={handleFormSubmit}>

//         <Box>
//         <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
//           <textarea name='Game Type' value={formState.gameType} onChange={handleChange}>
//           </textarea>
//         </Box>

//         <Box>
//         <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
//           <textarea name='Required Roles' value={formState.requiredRoles} onChange={handleChange}>
//           </textarea>
//         </Box>

//         <Box>
//         <FormLabel fontFamily='Righteous'>Start Time</FormLabel>
//           <textarea name='Start Time' value={formState.startTime} onChange={handleChange}>
//           </textarea>
//         </Box>

//       </Form>
//     </Box>
//   )
// };

// export default ActiveSessionCard;