const express = require('express');
const client = require('../database/db');
const bcrypt = require('bcrypt');

const auth = express.Router();

auth.post('/auth', async (req, res) => {

  const emailQuery = 'SELECT email FROM user_info WHERE email = $1' ;

  const passwordQuery = 'SELECT password FROM user_info WHERE email = $1';

  const foundEmail = await client.query(emailQuery, [req.body.email]);

  console.log(req.body.email);

  const foundPassword = await client.query(passwordQuery, [req.body.email]);

  console.log(foundPassword);

  const match = bcrypt.compare(req.body.password, foundPassword);

  if (foundEmail && match) {
    res.status(200);
    res.send('Success!');
  } else {
    res.status(404);
    res.send('Failure!');
  }
});

module.exports = auth;