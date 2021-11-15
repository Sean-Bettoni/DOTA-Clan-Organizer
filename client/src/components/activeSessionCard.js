import React from 'react';
// import { useMutation } from '@apollo/client';
import { Box, FormLabel, Form } from '@chakra-ui/react';
// import { CREATE_SESSION_CARD } from '../utils/mutations';
import { Link } from 'react-router-dom';


import { useQuery } from '@chakra-ui/media-query';
import { QUERY_GETSESSIONCARD } from '../utils/queries'



// const ActiveSessionCard = ({ gameType, requiredRoles, startTime = [] }) => {
const ActiveSessionCard = ({ gameType, requiredRoles, startTime }) => {
  
  const cardInfo = useQuery(QUERY_GETSESSIONCARD);

  if (!cardInfo) {
    return <Box>
    <FormLabel fontFamily='Fascinate Inline' fontSize='5xl' textAlign='center'>
      There are currently no <br></br> upcomming sessions, <br></br> Please <Link to ='/sessioncreator'>CREATE</Link> one</FormLabel>
    </Box>
  }


  return (
    <Box>
      <Form>

        <Box>
        <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
          <textarea name='Game Type' value={cardInfo.gameType}>
          </textarea>
        </Box>

        <Box>
        <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
          <textarea name='Required Roles' value={cardInfo.requiredRoles}>
          </textarea>
        </Box>

        <Box>
        <FormLabel fontFamily='Righteous'>Start Time</FormLabel>
          <textarea name='Start Time' value={cardInfo.startTime}>
          </textarea>
        </Box>

      </Form>
    </Box>
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