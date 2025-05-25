const express = require('express');
const Vehiculo = require('../controllers/vehiculo');


const api = express.Router();

api.post("/Vehiculo", Vehiculo.postVehiculo);
api.get("/Vehiculo", Vehiculo.getVehiculo);
// api.delete("/Servicio", servicio.deleteServicio);
// api.put("/Servicio", servicio.updateServicio);

module.exports = api;