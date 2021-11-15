import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input,
  Button,
} from '@chakra-ui/react';
// import { useMutation } from '@apollo/client';
// import { CREATE_SESSION_CARD } from '../utils/mutations';





// Original Code 

const SessionCreator = () => {
    return (
      <CreatorCard/>
    )
}

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

const SessionHeader = () => {
  return (
    <Box textAlign='center' outline='true'>
      <Heading fontFamily='Fascinate Inline'>Create A Session</Heading>
    </Box>
  )
}

const SessionForm = () => {
  return (
    <Box marginY={8} textAlign='center'>
      <form>
        <FormControl>
          <FormLabel fontFamily='Righteous'>Game Type</FormLabel>
          <Input type='game' focusBorderColor="lime"/>
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Required Roles</FormLabel>
          <Input type='role' focusBorderColor="lime"/>
        </FormControl>

        <FormControl>
          <FormLabel fontFamily='Righteous'>Perth Start Time (UTC/GMT +8 Hours)</FormLabel>
          <Input type='time' focusBorderColor="lime"/>
        </FormControl>

        <Button backgroundColor='#00B51E' width='full'marginTop={4} fontFamily='Righteous'>Create Session</Button>
      </form>
    </Box>
  )
}

export default SessionCreator;




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



