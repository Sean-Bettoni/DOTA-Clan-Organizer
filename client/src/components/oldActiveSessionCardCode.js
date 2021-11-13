
// Rachaels Code

const TripList = ({
    trips,
      title,
      showTitle = true,
    }) => {
  
    const [createSessionCard, loading] = useMutation(CREATE_SESSION_CARD); 
    // const [completeTrip, loading] = useMutation(COMPLETE_TRIP_UPDATE);
  

    if (!trips.length) {
      return <h3 className="noData col-"> No Trips Yet, Add Your First Trip Above!</h3>;
    }


    return (
      <div className="col-12 ">
        <div className="row ">
      {Auth.loggedIn() ? (
        <>
        {trips &&
          trips.map((trip) => (
          <Box
          key={trip._id}
          className="tripCard1"
          shadow="2xl"
          borderWidth="1px"
          borderRadius="md">
            <div key={trip._id} className="tripCard m-5 btn">
            <Checkbox size="lg" isChecked={Boolean(trip.completed)} onChange={toggleTrip(trip)} >
              <Link
                className="btn btn-primary btn-block"
                to={`/trip/${trip._id}`}
              >
              <Heading size="lg">{trip.name}</Heading>
              </Link>
            </Checkbox>
            </div>
          </Box>
          ))}        
        </>
            ) : (
          <p></p>
        )}
      </div>
      </div>
    );
  };
  
export default ;

 

// My Code
// export default function ActiveSessionCard(data) { 
//   const displayCard = useState('');
//   const [createSessionCard] = useMutation(CREATE_SESSION_CARD);
  

//   const loadData = async (event) => {
//     event.preventDefault();

//     try await createSessionCard;
//       displayCard(''); 
//     }
//     catch (err) {
//       console.error(err);
//     };
  

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();

//   //   try {
//   //     const { data }
//   //   }
//   // }

//   return (
//   <Box>
//     {Auth.loggedIn() ? (
//       <Form 
//         templateColumns="repeat(4, 1fr)" gap={6} mt={8} w="100%"
//         onSubmit={loadData}
//         >
//           <Box value={displayCard}>
            
//             <li>
//               {`${createSessionCard._id} 
//                 ${createSessionCard.gameType} 
//                 ${createSessionCard.requiredRoles} 
//                 ${createSessionCard.startTime}
//               `}
//             </li>
//           </Box>
//       </Form>
//     ) : ( 
//       <Text fontFamily='Fascinate Inline' fontSize='3xl'>
//       You need to be logged in to view this. Please{' '}
//       <Link to="/login">LOGIN</Link> or <Link to="/signup">SIGNUP.</Link>
//     </Text>
//     )}
//   </Box>
//   );
// };    