const express = require("express");
const {infoCursos} = require("./datos/cursos.js");

const routerProgramacion = require("./routers/programacion.js");
const routerMatematicas = require("./routers/matematicas.js");

const app = express();
const PUERTO = process.env.PORT || 3000;

/*
Descripción de Routers
// Routers

const routerProgramacion = express.Router();
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = express.Router();
app.use("/api/cursos/matematicas", routerMatematicas);

// Antes era app.get("/api/cursos/programacion", (req, res) => {})
routerProgramacion.get("/", (req, res) => {
    res.json(infoCursos.programacion);
});

// Antes era app.get("/api/cursos/matematicas", (req, res) => {})
routerMatematicas.get("/", (req, res) => {
    res.json(infoCursos.matematicas);
});
*/

app.get("/", (req, res) => {
    res.send("Mi primer servidor con Node.js y Express");   // res.send() es lo mismo que res.end()
});

app.get("/api/cursos", (req, res) => {
    res.json(infoCursos);   // res.json() para enviar un JSON
});

// Añadimos los routers
app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);



app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});