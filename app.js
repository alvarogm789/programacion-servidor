const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//importacion de rutas
// const usuarios = require("./rutas/usuarios");
// const auth = require("./rutas/auth");
// const abastecimientoYalmacenamiento = require("./rutas/abastecimientoYalmacenamiento");
const servicio = require("./rutas/servicio");
const vehiculo = require("./rutas/vehiculo");




// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Permite leer JSON desde las peticiones
// app.use(express.json());

//seguridad entre front y backend
app.use(cors()); //permite peticiones desde el frontend (React)


//configuracion rutas
// app.use("/api/v1", usuarios);
// app.use("/api/v1", auth);
// app.use("/api/v1", abastecimientoYalmacenamiento)
app.use("/api/v1", servicio);
app.use("/api/v1", vehiculo);


module.exports = app; 
