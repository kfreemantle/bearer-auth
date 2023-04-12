'use strict';

const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  try {
    // Check if the request has an authorization header, otherwise proceed to the next middleware with an error message
    if (!req.headers.authorization) { next('Invalid Login') }

    // Extract the token from the header
    const token = req.headers.authorization.split(' ').pop();

    // Authenticate the user using the provided token
    const validUser = await users.authenticateWithToken(token);

    // Attach the authenticated user and token to the request object
    req.user = validUser;
    req.token = validUser.token;

    // Proceed to the next middleware or route handler
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
}
