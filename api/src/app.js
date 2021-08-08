const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  //Seteamos headers para la respuesta que le enviamos al cliente
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', 'true');//Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');//Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');//Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
