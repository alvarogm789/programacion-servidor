const mongoose = require("mongoose");

const vehiculoSchema = new mongoose.Schema({

    // idVehiculo: {
    //   type: String,
    //   required: false
    // },
    placaVehiculo: {
        type: String,
        required: false
      },
    tipo: { //luego se va a agregar a un servicio
        type: String,
        required: false
    },
    vehiculo: { //luego se va a agregar a un servicio
        type: String,
        required: false
    },
    capacidad: { //luego se va a agregar a un servicio
        type: String,
        required: false
    },
    relacion: {
        type: String,
        required: false
    },
    // conductorAsignado: { //luego se va a agregar a un servicio / esto puede ser una lista de conductores
    //     type: String,
    //     required: false
    // },
    conductores: {
        type: [String], // <- debe ser un arreglo de strings
        default: []
    },



    estado: { //puede ser (0)=Disponible o (1)=No Disponible ===> "En mantenimiento, varado o inactivo por otro problema", 
      type: Number,
      required: false
    }

});

module.exports = mongoose.model("Vehiculo", vehiculoSchema);