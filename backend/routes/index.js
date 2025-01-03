const express = require('express');
const route = express.Router();
const {route: product} = require('./routes.js');

route.use('/', product);

module.exports = {route};