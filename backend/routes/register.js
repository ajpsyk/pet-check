const express = require('express');
const client = require('../database/db');
const bcrypt = require('bcrypt');

const register = express.Router();

register.post('/register', async (req, res) => {

  const registerQuery = 'INSERT INTO user_info (name, email, phone, company, password) VALUES ($1, $2, $3, $4, $5)' ;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  console.log(hashedPassword);

  await client.query(registerQuery, [req.body.name, req.body.email, req.body.phone, req.body.company, hashedPassword])
  .then(() => {
    res.status(200);
    res.send('Successful post');
  }
  )
  .catch(err => {
    res.status(404);
    res.send(err);
  }
  );
});

module.exports = register;