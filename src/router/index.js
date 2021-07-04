const express = require('express');
const route = express.Router();
const register = require('./regist/register');
route.use(register)
module.exports = route