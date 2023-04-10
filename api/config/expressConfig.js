const express = require('express');
require('dotenv').config();

const app = express();

app.use(cors(
  {
    origin: process.env.APP_URL,
    credentials: true,
  },
));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const usersRouter = require('../src/domains/users/controllers/index.js');
app.use('/api/users', usersRouter);

const engineersRouter = require('../src/domains/engineers/controllers/index.js');
app.use('/api/engineers', engineersRouter);

const errorHandler = require('../src/middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;