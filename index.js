const express = require('express');
const compression = require('compression');
const path = require('path');
const http = require('http');

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(3000);
module.exports = app;