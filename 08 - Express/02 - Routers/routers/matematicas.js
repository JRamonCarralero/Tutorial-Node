const express = require("express");
const routerMatematicas = express.Router();

const {matematicas} = require("../datos/cursos.js").infoCursos;

routerMatematicas.get("/", (req, res) => {
    res.json(matematicas);
});

routerMatematicas.get("/:tema", (req, res) => {
    const tema = req.params.tema;
    const resultado = matematicas.filter(curso => curso.tema === tema);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.json({error: `No se encontraron cursos de ${tema}`});
    }
});

module.exports = routerMatematicas;