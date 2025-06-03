const express = require('express');
const servicio = require('../controllers/servicio');


const api = express.Router();

api.post("/Servicio", servicio.postServicio);
api.get("/Servicio", servicio.getServicio);
// api.delete("/Servicio", servicio.deleteServicio);
api.delete("/Servicio/:id", servicio.deleteServicio);
api.put("/Servicio", servicio.updateServicio);

module.exports = api;