const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/products', require('./routes/products.routes'));
server.use('/users', require('./routes/users.routes'));
server.use('/roles', require('./routes/roles.routes'));
server.use('/auth', require('./routes/auth.routes'));

module.exports = server;