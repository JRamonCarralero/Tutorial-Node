const express = require("express");
const {infoCursos} = require("./datos/cursos.js");

const routerProgramacion = require("./routers/programacion.js");
const routerMatematicas = require("./routers/matematicas.js");

const app = express();
const PUERTO = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Mi primer servidor con Node.js y Express"); 
});

app.get("/api/cursos", (req, res) => {
    res.json(infoCursos);
});

// Tenemos el CRUD solo en programacion
app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});