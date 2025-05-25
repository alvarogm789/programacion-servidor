const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({

    idServicio: {
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
  
    // descripcionServicio: {
    //     type: String,
    //     required: true,
    // },
    // fechaCreacion: {
    //   type: Date,
    //   required: true,
    //   default: Date.now
    // },

});

module.exports = mongoose.model("Servicio", servicioSchema);