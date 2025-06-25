console.log(process)
console.log(process.env)    // variables de entorno
console.log(process.argv)   // argumentos de la consola, es un array, si en la consola, a node app.js le añadimos argumentos, podemos acceder a ellos con process.argv[indice]
for (let i = 0; i < process.argv.length; i++) {     // recorremos el array process.argv y lo imprimimos en la consola
    console.log(process.argv[i])
}
console.log(process.memoryUsage())   // memoria usada