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



