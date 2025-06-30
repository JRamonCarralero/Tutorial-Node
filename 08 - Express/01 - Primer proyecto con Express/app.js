// Importamos express
const express = require("express");

// Importamos el json de cursos para simular una BBDD
const {infoCursos} = require("./cursos.js");

// Creamos el servidor
const app = express();
// Creamos el puerto
const PUERTO = process.env.PORT || 3000;    // si no existe el puerto, usamos el 3000


// Routing
/*
    Para definir las rutas:
    app.<metodo>(ruta, callback)

    Por ejemplo:
    app.get("/", (req, res) => {
        res.json("Mi primer servidor con Node.js y Express");
    });
*/

// GET /
app.get("/", (req, res) => {
    res.json("Mi primer servidor con Node.js y Express");
});

// GET /api/cursos
app.get("/api/cursos", (req, res) => {
    res.json(infoCursos);
});

// GET /api/cursos/programacion
app.get("/api/cursos/programacion", (req, res) => {
    res.json(infoCursos.programacion);
});

// GET /api/cursos/matematicas
app.get("/api/cursos/matematicas", (req, res) => {
    res.json(infoCursos.programacion);
});


// Ponemos el servidor a escuchar en el puerto 3000
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});