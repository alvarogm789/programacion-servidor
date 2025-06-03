const express = require('express');
const Vehiculo = require('../controllers/vehiculo');


const api = express.Router();

api.post("/Vehiculo", Vehiculo.postVehiculo);
api.get("/Vehiculo", Vehiculo.getVehiculo);
// api.delete("/Vehiculo", Vehiculo.deleteVehiculo);
// En tus rutas:
api.delete("/Vehiculo/:id", Vehiculo.deleteVehiculo);
api.put("/Vehiculo", Vehiculo.updateVehiculo);

module.exports = api;