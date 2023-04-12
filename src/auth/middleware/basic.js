'use strict';

const base64 = require('base-64');
const { user } = require('../models/index.js');

module.exports = async (req, res, next) => {
  // Check if the request has an authorization header, otherwise return an error
  
  if (!req.headers.authorization) { return _authError(); }

  // Extract and decode the basic auth credentials from the header
  let basic = req.headers.authorization;
  let [username, pass] = base64.decode(basic).split(':');

  try {
    // Authenticate the user using the provided credentials
    const { user, token } = await user.authenticateBasic(username, pass);

    // Attach the authenticated user and token to the request object
    req.user = user;
    req.token = token;

    // Proceed to the next middleware or route handler
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
}
