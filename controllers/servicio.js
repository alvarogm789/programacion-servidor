const Servicio = require('../models/servicio');
const {ObjectId} = require('mongodb')

async function postServicio(req, res) {
    try {
        const arrayData = req.body;

        const response = await Servicio.create(arrayData);
        console.log("🚀 ~ postServicio ~ arrayData:", arrayData)

        if (!response) return res.status(400).send({msg: "Error al guardar datos", status: false});
        return res.status(201).send(response[0]);
    } catch(error) {
        if (error.code === 11000) return res.status(503).send({msg: "Error 11000", status: false});

        return res.status(503).send({msg: "Error server", status: false});
    }

}


// async function getServicio(req, res) { //traer todos los servicios
//     try {
//       const { idServicio, _id } = req.query;
  
//       //filtro
//       const filter = {};
//       if (idServicio) filter.idServicio = idServicio;
//       if (_id) filter._id = _id;
  
  
//       const response = await Servicio.find(filter);
  
  
//       // Responde con los documentos encontrados
//       return res.status(200).send({ msg: response, status: true });
//     } catch (error) {
//       console.error("Error en getServicios:", error);
//       return res.status(503).send({ msg: `Error al ejecutar getServicios: ${error}`, status: false });
//     }
//   }


async function getServicio(req, res) {
  try {
    const { idServicio, _id } = req.query;
    const filter = {};
    if (idServicio) filter.idServicio = idServicio;
    if (_id) filter._id = _id;

    const response = await Servicio.find(filter);
    return res.status(200).send(response); //esto devuelve un array directo
  } catch (error) {
    console.error("Error en getServicios:", error);
    return res.status(503).send({ msg: `Error al ejecutar getServicios: ${error}`, status: false });
  }
}







async function deleteServicio( req, res) {
    const id = req.body.id;

    if (!id) return res.status(403).send("Id Requerido");
    
    try {
        const result = await Servicio.findOneAndDelete({ _id: id });

        if (!result) return res.status(404).send("Registro de Servicio no encontrado");
        return res.status(200).send(`Se ha eliminado exitosamente el registro con ID ${id} `);
    } catch (err) {
        res.status(500).send(err.message);
        console.log("//        ¡Ocurrio un error en metodo deleteServicio!        //");
    }
};



async function updateServicio(req, res) {
  try {
      const { _id, update } = req.body;
      if (!_id) return res.status(400).send({ msg: "Id de Servicio requerido", status: false });


      // $set para actualizar solo los campos proporcionados
      const response = await Servicio.findByIdAndUpdate(
          _id, 
          { $set: update }, 
          { new: true}
      );
      console.log("Servicio: ", response)
      if (!response) {
          return res.status(404).send({ msg: "Documento no encontrado", status: false });
      }
      console.log("🚀 ~ updateServicio ~ response:", response);
      return res.status(200).send({ msg: "Actualización exitosa en el Servicio", status: true, data: response });
  
    } catch (error) {
      console.log("Ha ocurrido un error al intentar actualizar el servicio:", error);
      return res.status(500).send({ msg: "Error al actualizar", status: false });
  }
}

module.exports = {
    postServicio,
    getServicio,
    deleteServicio,
    updateServicio
}