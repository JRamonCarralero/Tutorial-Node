// importamos el archivo saludo
/*
const saludo = require("./saludos.js")
*/
// para importar algunas funciones del módulo ysamos deconstruccion
const {saludar, despedir} = require("./saludos.js")


console.log(saludar("Ramon"))   // Al importarlo deconstruyendo, saludar ya tiene el valor de la función
console.log(despedir("Ramon"))
// console.log(saludo.saludarHolaMundo())    // si lo hemos exportado con const saludo = require("./saludos.js")