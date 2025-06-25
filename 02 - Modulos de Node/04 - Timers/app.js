// Modulo timers
// El modulo de timers nos permite crear timers
// No requiere la importacion del modulo


// setTimeout
// setTimeout(funcion, milisegundos, argumentos)    para varios argumentos, separamos con comas
// La funcion se ejecutara despues de milisegundos
// No se para la ejecución del programa, pero la función se ejecutara despues de milisegundos
console.log("antes del timer")
setTimeout((arg) => {
    console.log(`Tras 2 segundos... ${arg}`)    // arg es el argumento que le hemos pasado a setTimeout(`arg`)
}, 2000, "hola mundo")

function sumar(a, b, c) {
    console.log(a + b + c)
}
console.log("antes de la sumar")
setTimeout(sumar, 2000, 1, 2, 3)


// setInmediate
// setInmediate(funcion, argumentos)    para varios argumentos, separamos con comas
// La funcion se ejecutara inmediatamente despues de la ejecución del código síncrono
// Se ejecuta lo más rápido posible de forma asíncrona
console.log("antes del setImmediate")
setImmediate((arg) => {
    console.log(`${arg}`)    // arg es el argumento que le hemos pasado a setTimeout(`arg`)
}, "ejecutando setImmediate")
console.log("despues del setImmediate")


// setInterval
// setInterval(funcion, milisegundos, argumentos)    para varios argumentos, separamos con comas
// La funcion se ejecutara en intervalos de milisegundos
// Se ejecuta lo más rápido posible de forma asíncrona
console.log("antes del setInterval")
setInterval((arg) => {
    console.log(`${arg}`)    // arg es el argumento que le hemos pasado a setTimeout(`arg`)
}, 1000, "ejecutando setInterval")    // ejecutando setInterval cada segundo