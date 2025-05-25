const mongoose = require("mongoose");

const vehiculoSchema = new mongoose.Schema({

    idVehiculo: {
      type: String,
      required: false
    },
    placaVehiculo: {
        type: String,
        required: false
      },
    color: {
        type: String,
        required: false
      },

    placaVehiculoAsignado: {
      type: String,
      required: false
    }
    // conductorDeVehiculo: { //si tiene conductor asignado
    //   type: Date,
    //   required: false
    // },
});

module.exports = mongoose.model("Vehiculo", vehiculoSchema);