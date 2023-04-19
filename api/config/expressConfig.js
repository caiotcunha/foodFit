const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const usersRouter = require('../src/domains/users/controllers/index')
app.use('/api/users', usersRouter)



module.exports = app;