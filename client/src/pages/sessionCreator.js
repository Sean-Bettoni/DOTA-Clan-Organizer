import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SESSION_CARD } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { 
  Box,  
  FormControl, 
  FormLabel, 
  Input,
  Button,
  Flex,
  Heading
} from '@chakra-ui/react';



const SessionCreator = () => {
  return (
    <CreatorCard/>
  )
}

// CreatorCard Complete
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


// SessionHeader Complete
const SessionHeader = () => {
return (
  <Box textAlign='center' outline='true'>
    <Heading fontFamily='Fascinate Inline'>Create A Session</Heading>
  </Box>
)
}




const SessionForm = () => {
  const [formState, setFormState] = useState({
    gameType: '',
    requiredRoles: '',
    startTime: '',
  });

  // Set up our mutation with an option to handle errors
  const [createSessionCard, {error}] = useMutation(ADD_SESSION_CARD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields match the defined parameters in `ADD_SESSION_CARD` mutation
    try {
      const { data } = createSessionCard({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'gameType') {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'gameType') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <Box>
      {Auth.loggedIn() ? ( 
      <Box marginY={8} textAlign='center'>
      <form onSubmit={handleFormSubmit}>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
          <Input 
          className="form-input"
          focusBorderColor="lime"
          name="gameType"
          type="text"
          value={formState.gameType}
          onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
          <Input 
          className="form-input" 
          focusBorderColor="lime"
          name="requiredRoles"
          type="text"
          value={formState.requiredRoles}
          onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
          <Input 
          className="form-input" 
          focusBorderColor="lime"
          name="startTime"
          type="time"
          value={formState.startTime}
          onChange={handleChange}
          />
        </FormControl>

        <Button 
        backgroundColor='#00B51E'
        _hover={{backgroundColor:'lime'}} 
        width='full'marginTop={4} 
        fontFamily='Righteous'
        type="submit"
        >
          Create Session
          </Button>
      </form>
      {error && (
        <div my='3' p='3' bg-='red' text='white'>
        {error.message}
        </div>
      )}
    </Box>
    ) : (
    <Box marginY={8} textAlign='center'>
      You need to be logged in to create a session.  
      <Link to="/login"> LOGIN</Link> or <Link to="/signup">SIGNUP</Link> to continue.
    </Box>
    )}
    </Box>
  );
};

export default SessionCreator;






// // Old Code

// // SessionCreator Complete
// const SessionCreator = () => {
//     return (
//       <CreatorCard/>
//     )
// }

// // CreatorCard Complete
// const CreatorCard = () => {
//   return (
//     <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
//       <Box 
//       borderWidth={4} px={4} padding='5'
//       bgColor='#A0A0A0'
//       opacity='0.75'
//       width='full' maxWidth='500px' borderRadius={4} 
//       textAlign='center'>
//       <SessionHeader />
//       <SessionForm />
//       </Box>
//     </Flex>
//   )
// }


// // SessionHeader Complete
// const SessionHeader = () => {
//   return (
//     <Box textAlign='center' outline='true'>
//       <Heading fontFamily='Fascinate Inline'>Create A Session</Heading>
//     </Box>
//   )
// }




// const SessionForm = ({ SessionCardId }) => {
//   const [formState, setFormState] = useState({
//     gameType: '',
//     requiredRoles: '',
//     startTime: '',
//   });


// // Need to fix post mutation here
//   const [createSessionCard, {error}] = useMutation(ADD_SESSION_CARD, {
//     update(cache, { data: { createSessionCard } }) {
//       try {
//         const { activeSessions } = cache.readQuery({
//           query: QUERY_GETSESSIONCARD,
//           variables: { SessionCardId } });
//           cache.writeQuery({
//             query: QUERY_GETSESSIONCARD,
//             data: { activeSessions: [createSessionCard, ...activeSessions] },
//             variables: {SessionCardId}
//           });
//         } catch (e) {
//           console.error(e);
//         }
//       },
//   });
  
  

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };



//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(formState);

//     try {
//       const { data } = await createSessionCard({
//         variables: { ...formState },
//       });
//     } 
//     catch (e) {
//       console.error(e);
//     }
//   };

 

//   return (
//     // <Box>
//     // {data ? (
//     //   <p>
//     //   Session Created! Taking you{' '}
//     //   <Link to="/home">to the homepage.</Link>
//     //   </p>
//     // ) : (
//     <Box>
//       {Auth.loggedIn() ? ( 
//       <Box marginY={8} textAlign='center'>
//       <form onSubmit={handleFormSubmit}>

//         <FormControl>
//           <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
//           <Input 
//           className="form-input"
//           focusBorderColor="lime"
//           placeholder="What Game Mode Will You Be Playing?"
//           name="gameType"
//           type="text"
//           value={formState.gameType}
//           onChange={handleChange}
//           />
//         </FormControl>

//         <FormControl>
//           <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
//           <Input 
//           className="form-input" 
//           focusBorderColor="lime"
//           placeholder="List The Positions/Roles You Require"
//           name="requiredRoles"
//           type="text"
//           value={formState.requiredRoles}
//           onChange={handleChange}
//           />
//         </FormControl>

//         <FormControl>
//           <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
//           <Input 
//           className="form-input" 
//           focusBorderColor="lime"
//           name="startTime"
//           type="time"
//           value={formState.startTime}
//           onChange={handleChange}
//           />
//         </FormControl>

//         <Button 
//         backgroundColor='#00B51E'
//         _hover={{backgroundColor:'lime'}} 
//         width='full'marginTop={4} 
//         fontFamily='Righteous'
//         type="submit"
//         >
//           Create Session
//           </Button>
//       </form>
//       {error && (
//         <div my='3' p='3' bg-='red' text='white'>
//         {error.message}
//         </div>
//       )}
//     </Box>
//     ) : (
//     <p>
//       You need to be logged in to create a session.  
//       <Link to="/login"> LOGIN</Link> or <Link to="/signup">SIGNUP</Link> to continue.
//     </p>
//     )}
//     </Box>
//   )
// };

// export default SessionCreator;





// ----------------------------------------------------------------------------------





// const SessionCreator = () => {
//   const formState = useState('');
  

//   const [addData, { error, data }] = useMutation(CREATE_SESSION_CARD);


//   // const handleChange = (event) => {
//   //   const { name, value } = event.target;

//   //   setFormState({
//   //     ...formState,
//   //     [name]: value,
//   //   });
//   // };


//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const data = await addData({variables: { ...formState }
//       });
//       // addData.update(data.formState)
//       // Auth.login(data.addUser.token);
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     <main >
//         <Box>
//             {data ? (
//               <p>
//                 Success!
//               </p>
//             ) : (
//               <Form onSubmit={handleFormSubmit}>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
//                   <Input name ='gameType' type='text' value={formState.gameType} focusBorderColor="lime"/>
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
//                   <Input name ='requiredRoles' type='text' value={formState.requiredRoles} focusBorderColor="lime"/>
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
//                   <Input name ='startTime' type='text' value={formState.startTime} focusBorderColor="lime"/>
//                 </FormControl>

//                 <Button type='submit' backgroundColor='#00B51E' 
//                 width='full'marginTop={4} 
//                 fontFamily='Righteous'>Create Session</Button>
//                   Submit

//               </Form>
//             )}

//             {error && (
//               <Message>
//                 <p>{error.message}</p>
//               </Message>
//             )}
//         </Box>
//     </main>
//   );
// };

// export default SessionCreator;

















// const SessionCreator = () => {
//   const [formState, setFormState] = useState({
//     gameType: '',
//     requiredRoles: '',
//     startTime: '',
//   });
  

//   const [addData, { error, data }] = useMutation(CREATE_SESSION_CARD);


//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };


//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addData({
//         variables: { ...formState },
        
//       });
//       // addData.update(data.formState)
//       // Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };


//   return (
//     <main >
//         <Box>
//             {data ? (
//               <p>
//                 Success!
//               </p>
//             ) : (
//               <Form onSubmit={handleFormSubmit}>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
//                   <Input name ='gameType' type='text' value={formState.gameType} onChange={handleChange} focusBorderColor="lime"/>
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
//                   <Input name ='requiredRoles' type='text' value={formState.requiredRoles} onChange={handleChange} focusBorderColor="lime"/>
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
//                   <Input name ='startTime' type='text' value={formState.startTime} onChange={handleChange} focusBorderColor="lime"/>
//                 </FormControl>

//                 <Button type='submit' backgroundColor='#00B51E' 
//                 width='full'marginTop={4} 
//                 fontFamily='Righteous'>Create Session</Button>
//                   Submit

//               </Form>
//             )}

//             {error && (
//               <Message>
//                 <p>{error.message}</p>
//               </Message>
//             )}
//         </Box>
//     </main>
//   );
// };

// export default SessionCreator;



