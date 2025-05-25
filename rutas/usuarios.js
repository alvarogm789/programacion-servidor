const express = require('express');
const userController = require('../controllers/usuarios');

const api = express.Router();

api.post("/client", userController.postUser);
api.get("/client", userController.getUser);
api.delete("/client", userController.deleteUser);
api.put("/client", userController.updateUser);

module.exports = api;