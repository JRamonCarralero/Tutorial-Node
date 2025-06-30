const express = require("express");
const routerProgramacion = express.Router();

const {programacion} = require("../datos/cursos.js").infoCursos;

routerProgramacion.get("/", (req, res) => {
    res.json(programacion);
});

routerProgramacion.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(curso => curso.tema === lenguaje);

    console.log(req.query.ordenar);
    if (req.query.ordenar === "vistas") {
        resultado.sort((a, b) => b.vistas - a.vistas);
    }

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.json({error: `No se encontraron cursos de ${lenguaje}`});
    }
});

routerProgramacion.get("/:tema/:nivel", (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const resultado = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({error: `No se encontraron cursos de ${tema} de nivel ${nivel}`}); // status(404) incluimos el status
    }
});

module.exports = routerProgramacion;