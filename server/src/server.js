const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/products', require('./routes/index'));

module.exports = server;