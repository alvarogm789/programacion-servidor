const Vehiculo = require('../models/vehiculo');
const {ObjectId} = require('mongodb')

async function postVehiculo(req, res) {
    try {
        const arrayData = req.body;

        const response = await Vehiculo.create(arrayData);
        console.log("🚀 ~ postServicio ~ arrayData:", arrayData)

        if (!response) return res.status(400).send({msg: "Error al guardar datos", status: false});
        return res.status(201).send(response[0]);
    } catch(error) {
        if (error.code === 11000) return res.status(503).send({msg: "Error 11000", status: false});

        return res.status(503).send({msg: "Error server !!!", status: false});
    }

}


async function getVehiculo(req, res) {
    try {
      const { idVehiculo, _id } = req.query;
  
      //filtro
      const filter = {};
      if (idVehiculo) filter.idVehiculo = idVehiculo;
      if (_id) filter._id = _id;
  
  
      const response = await Vehiculo.find(filter);
  
  
      // Responde con los documentos encontrados
      return res.status(200).send({ msg: response, status: true });
    } catch (error) {
      console.error("Error en getAbastecimientoYalmacenamiento:", error);
      return res.status(503).send({ msg: `Error al ejecutar getAbastecimientoYalmacenamiento: ${error}`, status: false });
    }
  }



// async function deleteVehiculo( req, res) {
//     const id = req.body.id;

//     if (!id) return res.status(403).send("Id Requerido");
    
//     try {
//         const result = await Vehiculo.findOneAndDelete({ _id: id });

//         if (!result) return res.status(404).send("Registro de Vehiculo no encontrado");
//         return res.status(200).send(`Se ha eliminado exitosamente el registro con ID ${id} `);
//     } catch (err) {
//         res.status(500).send(err.message);
//         console.log("//        ¡Ocurrio un error en metodo deleteVehiculo!        //");
//     }
// };



// async function updateVehiculo(req, res) {
//   try {
//       const { _id, update } = req.body;
//       if (!_id) return res.status(400).send({ msg: "Id de Vehiculo requerido", status: false });


//       // $set para actualizar solo los campos proporcionados
//       const response = await Vehiculo.findByIdAndUpdate(
//           _id, 
//           { $set: update }, 
//           { new: true}
//       );
//       console.log("Vehiculo: ", response)
//       if (!response) {
//           return res.status(404).send({ msg: "Documento no encontrado", status: false });
//       }
//       console.log("🚀 ~ updateVehiculo ~ response:", response);
//       return res.status(200).send({ msg: "Actualización exitosa en el Vehiculo", status: true, data: response });
  
//     } catch (error) {
//       console.log("Ha ocurrido un error al intentar actualizar el Vehiculo:", error);
//       return res.status(500).send({ msg: "Error al actualizar", status: false });
//   }
// }

module.exports = {
    postVehiculo,
    getVehiculo,
    // deleteServicio,
    // updateServicio
}