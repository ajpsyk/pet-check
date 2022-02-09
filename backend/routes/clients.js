const express = require('express');
const client = require('../database/db');

const clients = express.Router();

clients.get('/clients', async (req, res) => {
  const clientsQuery = 'SELECT product_id, active FROM cart WHERE product_id = $1';

  const cartData = await client.query(cartQuery, [req.params.product_id]);

  res.send(cartData.rows);
});

module.exports = cart;