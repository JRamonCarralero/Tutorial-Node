const express = require("express");
const routerProgramacion = express.Router();

const {programacion} = require("../datos/cursos.js").infoCursos;

// Middleware
/*
    Los middleware son funciones que se ejecutan antes de las rutas.
    Los middleware se ejecutan en el orden en que se definen.
*/
routerProgramacion.use(express.json()); // Para poder leer el cuerpo de la solicitud

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
        res.status(204).json({error: `No se encontraron cursos de ${tema} de nivel ${nivel}`}); // status(404) incluimos el status
    }
});

// Creacion de un nuevo curso, indicamos que es una solicitud POST
routerProgramacion.post("/", (req, res) => {
    const nuevoCurso = req.body;    // req.body es el cuerpo de la solicitud
    programacion.push(nuevoCurso);
    res.json(programacion);
});

// Actualización de un nuevo objeto (enviando TODAS las propiedades), solicitud PUT
routerProgramacion.put("/:id", (req, res) => {
    const id = req.params.id;
    const nuevoCurso = req.body;
    const index = programacion.findIndex(curso => curso.id == id); // Usamos un == porque el id es string y curso.id es un numero, así no compara tipos
    if (index !== -1) {
        programacion[index] = nuevoCurso;
        res.json(programacion);
    } else {
        res.status(204).json({error: `No se encontraron cursos con el id ${id}`}); // status(404) incluimos el status
    }
});

// Actualización de un nuevo objeto (enviando SOLO las propiedades que se quieren actualizar), solicitud PATCH
routerProgramacion.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);  // Asignamos todas las propiedades del objeto infoNueva al objeto cursoAModificar
  }
  res.json(programacion);
});

// Eliminación de un curso
routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.json(programacion);
});


module.exports = routerProgramacion;