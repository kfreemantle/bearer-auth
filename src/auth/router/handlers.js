'use strict';

const { users } = require('../models/index.js');

async function handleSignup(req, res, next) {
  try {
    // Create a new user record in the database
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };

    // Respond with the created user and their token
    res.status(200).json(output);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleSignin(req, res, next) {
  try {
    // Retrieve the authenticated user and their token from the request object
    const user = {
      user: req.user,
      token: req.token
    };

    // Respond with the authenticated user and their token
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    // Retrieve all user records from the database
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);

    // Respond with a list of usernames
    res.status(200).json(list);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

function handleSecret(req, res, next) {
  // Respond with a welcome message for authenticated users
  res.status(200).send("Welcome to the secret area!");
}

module.exports = {
  handleSignup,
  handleSignin,
  handleGetUsers,
  handleSecret
}
