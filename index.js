const express = require('express');
const { dbConnection } = require('./database');
require('dotenv').config();
const port = process.env.PORT;
//Crear el servidor de express



const app = express();


//Base de datos

dbConnection();

//Directorio public

app.use(express.static('public'))


//lectura y parse de el body

app.use(express.json());
//rutas

app.use('/api/auth', require('./routes/auth'));

//escuchar peticiones

app.listen(port, () => { console.log(`Servidor corriendo en el puerto ${port}`) });