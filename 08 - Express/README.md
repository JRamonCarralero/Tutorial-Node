# Express

Para comenzar, necesitamos crear la aplicación para añadirle después express

```bash
npm init
```

Ahora instalamos express

```bash
npm install express
```

Se instalan todas las dependencias de express, podemos verlo en el package.json, package-lock.json y node_modules

## Iniciar el servidor

Para iniciar el servidor, es igual que con Node.js

```bash
node app.js
```

## Rutas

Para definir las rutas:

```javascript
app.<metodo>(ruta, callback)
```

Por ejemplo:

```javascript
app.get("/", (req, res) => {
    res.json("Mi primer servidor con Node.js y Express");
});
```

## Parametros de Ruta

Para definir los parametros de la ruta:

```javascript
app.<metodo>(ruta/:parametro, callback)
```

Por ejemplo:

```javascript
app.get("/api/cursos/:curso", (req, res) => {
    res.json(infoCursos[req.params.curso]);
});
```

Si tenemos 2 parámetros de ruta, se separan con un /:

```javascript
app.get("/api/cursos/:curso/:tema", (req, res) => {
    res.json(infoCursos[req.params.curso]);
});
```

## Parametros de Query

Para definir los parametros de la query:

```javascript
// ruta?paramertro=valor
app.<metodo>(ruta, callback)
```

Por ejemplo:

```javascript
app.get("/api/cursos", (req, res) => {
    res.json(infoCursos[req.query.curso]);
});
```

## Routers

Para crear un router:

```javascript
const routerProgramacion = express.Router();
app.use("/api/cursos/programacion", routerProgramacion);
```

Y para usarlo:

```javascript
// Antes era app.get("/api/cursos/programacion", (req, res) => {})
routerProgramacion.get("/", (req, res) => {
    res.json(infoCursos.programacion);
});
```

Para crear rutas con Routers, debemos crear un archivo con el nombre del router y exportarlo

```javascript
const express = require("express");
const routerProgramacion = express.Router();
/*
    Aquí va el código del router
*/

module.exports = routerProgramacion;
```

Y en el fichero app.js, se importa el router y se usa con app.use

```javascript
const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);
```

## Middlewares

Las funciones que se ejecutan antes de la ruta, se llaman middlewares, son como un intermediario entre la ruta y el callback.

Por ejemplo:

```javascript
routerProgramacion.use(express.json()); 
```

Este middleware en concreto nos permite recibir los datos en el body de la request, y acceder a ellos con req.body

## Enviar datos con Express

Para enviar datos con Express, se usa res.json, que nos permite enviar un objeto JSON

```javascript
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
```
