const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/products', require('./routes/index'));
server.use('/users', require('./routes/users'));
server.use('/rol', require('./routes/rol'));

module.exports = server;