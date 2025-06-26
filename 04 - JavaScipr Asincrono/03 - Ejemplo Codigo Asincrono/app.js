/*
    Promesa (Promise):
    Una promesa es un objeto que representa el resultado de una operación asíncrona en JavaScript.
    Una promesa tiene tres estados: pendiente, cumplida y rechazada.
    Esta promesa se asocia a una callback function, que se ejecutara cuando la promesa se cumpla o se rechace.
*/
const promesaCumplida = false    // Lo usamos para poder hacer el ejemplo, la llamada nos debería dar el resultado de la promesa

// Creamos una promesa, resolve y reject son funciones que se ejecutan cuando la promesa se cumple o se rechaza
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve("Se ha cumplido la promesa")    // resolve es la promesa cumplida
        } else {
            reject("Se ha rechazado la promesa")    // reject es la promesa rechazada
        }
    }, 3000)
})

// La función then se ejecuta cuando la promesa se cumple
// La función catch se ejecuta cuando la promesa se rechaza
promesa.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Definimos una función por si se cumple la promesa
const manejarPromesaCumplida = (valor) => {
    console.log("manejarPromesaCumplida")
    console.log(valor)
}

// Definimos una función por si se rechaza la promesa
const manejarPromesaRechazada = (error) => {
    console.log("manejarPromesaRechazada")
    console.log(error)
}

// Ejecutamos la promesa y le asociamos las funciones manejarPromesaCumplida y manejarPromesaRechazada
promesa.then(manejarPromesaCumplida, manejarPromesaRechazada);