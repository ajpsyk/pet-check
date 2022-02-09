const express = require('express');
const compression = require('compression');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const register = require('./routes/register');
const auth = require('./routes/auth');
const cors = require ('cors');

dotenv.config();

const {
  HTTP_PORT
} = process.env;

const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());

app.use(register);
app.use(auth);

if (HTTP_PORT) {
  http.createServer(app).listen(HTTP_PORT);
}

module.exports = app;