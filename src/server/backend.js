const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/routes');

const backend = express();

backend.use(morgan('dev'));
backend.use(cors());

backend.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

backend.use(express.json());
backend.use(express.static(`${__dirname}/public`));

backend.use('/api/v1/receita', routes);

module.exports = backend;
