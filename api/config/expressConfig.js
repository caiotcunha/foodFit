require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const usersRouter = require('../src/domains/users/controllers/index')
app.use('/api/users', usersRouter)

const dietsRouter = require('../src/domains/diets/controllers/index')
app.use('/api/diets', dietsRouter)

module.exports = app;