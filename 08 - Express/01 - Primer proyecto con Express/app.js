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
    res.send("Mi primer servidor con Node.js y Express");   // res.send() es lo mismo que res.end()
});

// GET /api/cursos
app.get("/api/cursos", (req, res) => {
    res.json(infoCursos);   // res.json() para enviar un JSON
});

// GET /api/cursos/programacion
app.get("/api/cursos/programacion", (req, res) => {
    res.json(infoCursos.programacion);
});

// GET /api/cursos/matematicas
app.get("/api/cursos/matematicas", (req, res) => {
    res.json(infoCursos.programacion);
});


// Parametros de ruta
/*
    Para definir los parametros de la ruta:
    app.<metodo>(ruta/:parametro, callback)

    Por ejemplo:
    app.get("/api/cursos/:curso", (req, res) => {
        res.json(infoCursos[req.params.curso]);
    });
*/

//Parametros Query
/*
    Para definir los parametros de la query:
    app.<metodo>(ruta?parametro, callback)

    Por ejemplo:
    app.get("/api/cursos/programacion", (req, res) => {
        res.json(infoCursos[req.query.curso]);
    });
*/

// GET /api/cursos/programacion/:lenguaje
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;   // Obtenemos el lenguaje que es un parametro de ruta
    const resultado = infoCursos.programacion.filter(curso => curso.tema === lenguaje);

    console.log(req.query.ordenar); // Muestra si se ha enviado por query el parametro ordenar
    if (req.query.ordenar === "vistas") {
        resultado.sort((a, b) => b.vistas - a.vistas);
    }

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.json({error: `No se encontraron cursos de ${lenguaje}`});
    }
});

// GET /api/cursos/matematicas/:tema
app.get("/api/cursos/matematicas/:tema", (req, res) => {
    const tema = req.params.tema;
    const resultado = infoCursos.programacion.filter(curso => curso.tema === tema);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.json({error: `No se encontraron cursos de ${tema}`});
    }
});

// GET /api/cursos/programacion/:tema/:nivel
app.get("/api/cursos/programacion/:tema/:nivel", (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const resultado = infoCursos.programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({error: `No se encontraron cursos de ${tema} de nivel ${nivel}`}); // status(404) incluimos el status
    }
});



// Ponemos el servidor a escuchar en el puerto 3000
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});