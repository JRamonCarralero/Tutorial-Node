/*
Importamos el archivo JSON 

const curso = require("./curso.json")
console.log(curso)
*/


// Creamos el archivo JSON
let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

console.log(infoCurso);
console.log(typeof infoCurso);

// Transformamos el objeto de JavaScript en una cadena 
console.log("===== En formato JSON con JSON.stringify() =====");
let infoJSON = JSON.stringify(infoCurso);

console.log(infoJSON);
console.log(typeof infoJSON);

// undefined porque ya no es un objeto, es una cadena de caracteres con el formato JSON.
console.log(infoJSON.titulo);

// Transformamos la cadena JSON en un objeto
console.log("===== Objeto de JavaScript con JSON.parse() =====");
let infoObjeto = JSON.parse(infoJSON);

console.log(infoObjeto);
console.log(typeof infoObjeto);

// Ahora si tenemos un objeto de JavaScript.
console.log(infoObjeto.titulo);