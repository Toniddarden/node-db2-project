const express = require('express');

const db = require('./data/db.config');
const carsRouter = require('./routes/cars');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h3>Toni knex</h3>');
});



module.exports = server;