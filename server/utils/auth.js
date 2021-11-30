// Auth completed

const jwt = require('jsonwebtoken');
const secret = 'mysuperdupersecretpasswordthatnoonewilleverguess#sfgnbnh3567356shrwts345aerthg76846ftsh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // Allows token to be sent by req.body, req.query or req.headers
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }
    // If token is verified, add decoded user data to request so that it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } 
    
    catch {
      console.log('Invalid token');
    }
    // Return the request object so that it can be passed to the resolver as 'context'
    return req;
  },
    
  signToken: function ({ username, _id }) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
