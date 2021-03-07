// Hola  buenas tardes
const express = require("express");
const path = require('path');
const app = express();

// Declarando el puerto del servidor
app.set('port', process.env.PORT || 3000);


// Se establece la ruta de los archivos
app.set('/', (req, res) =>{
  res.sendFile(__dirname + path.join('server.js'));
});


// aqui se escucha el servidor
app.listen(app.get('port'));