const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({

    cliente: { //de quien es el servicio
      type: String,
      required: false
    },
    placaVehiculoAsignado: {
        type: String,
        required: false
      },
    descripcionServicio: {
        type: String,
        required: false
      },
    fechaInicioDeServicio: {
        type: Date,
        required: false
      },
    fechaFinDeServicio: {
      type: Date,
      required: false
    },
    // fechaCreacion: {
    //   type: Date,
    //   required: true,
    //   default: Date.now
    // },

});

module.exports = mongoose.model("Servicio", servicioSchema);