import decode from 'jwt-decode';


class AuthService {
    // Returning user
    getProfile() {
        return decode(this.getToken());
    }

    // Checking if user is logged in
    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    // Checking if token is expired
    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    // Getting users token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // Saving users token to local storage
    login() {
        window.location.assign('/home');
    }

    // Removing users token from local storage
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();

// login(idToken) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/home');
// }





// const Login = () => {
//     return (
//         <LoginArea/>
//     )
// }

// const LoginArea = () => {
//   return (
//     <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
//       <Box 
//       borderWidth={4} px={4} padding='5'
//       bgColor='grey'
//       opacity='0.75'
//       width='full' maxWidth='500px' borderRadius={4} 
//       textAlign='center'>
//       <Image src='https://m.media-amazon.com/images/I/41fOv4JH2fL.jpg' 
//       boxSize='300px' 
//       mx='auto'
//       my={6}
//       borderRadius='full'
//       />
//       <LoginHeader />
//       <LoginForm />
//       </Box>
//     </Flex>
//   )
// }

// const LoginHeader = () => {
//   return (
//     <Box textAlign='center' outline='true'>
//       <Heading fontFamily='Fascinate Inline'> Sign Into Your Account</Heading>
//     </Box>
//   )
// }

// const LoginForm = () => {
//   return (
//     <Box marginY={8} textAlign='center'>
//       <form>
//         <FormControl>
//           <FormLabel fontFamily='Righteous'>Email Address</FormLabel>
//           <Input type='email' focusBorderColor="lime"/>
//         </FormControl>

//         <FormControl>
//           <FormLabel fontFamily='Righteous'>Password</FormLabel>
//           <Input type='password' focusBorderColor="lime"/>
//         </FormControl>
//         <Button  _hover={{backgroundColor:'lime'}} width='full'marginTop={4} 
//         fontFamily='Righteous'>Sign In</Button>
//       </form>
//     </Box>
//   )
// }

// export default Login;

