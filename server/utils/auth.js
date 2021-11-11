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

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } 
    
    catch {
      console.log('Invalid token');
    }

    return req;
  },
    
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
