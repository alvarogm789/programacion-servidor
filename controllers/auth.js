const User = require('../models/usuarios');
const {ObjectId} = require('mongodb')

async function signin(req, res) {
    try {
        const {Email, Contrasena} = req.body;

        const response = await User.findOne({Email});

        if (!response) return res.status(404).send({msg: "usuario no encontrado"});

        if (Contrasena != response.Contrasena) return res.status(404).send({msg: "Usuario/Contrasena no coinciden"});
        
        const responseToObject = response.toObject();
        delete responseToObject.Contrasena;
        return res.status(200).send(responseToObject);

        // if (!response) return res.status(400).send({msg: "Error al guardar datos postUser", status: false});
        // return res.status(201).send({msg: response, status: true});
    } catch(error) {
        return res.status(503).send({msg: "Error server signin", status: false});
    }

}
module.exports = {
    signin,
}