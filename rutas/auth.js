const express = require('express');
const authController = require('../controllers/auth');

const api = express.Router();

api.post("/signin", authController.signin);

module.exports = api;