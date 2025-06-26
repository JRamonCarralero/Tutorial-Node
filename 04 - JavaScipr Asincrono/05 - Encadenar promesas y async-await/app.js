/*
Encadenar promesas con async await
*/


// Función que simula un pedido de producto
function pedirProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Pidiendo ${producto}`)
        setTimeout(() => {
            if (producto === 'Monitor') resolve(`El producto ${producto} ha sido pedido`)
            else reject(`El producto ${producto} no está disponible`)
        }, 1000)
    })
}

// Función que simula el procesamiento de un pedido
function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando pedido')
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(() => {
            resolve(`Gracias por su compra`)
        }, 1000)
    })
}

// Simulamos la orden de un producto
// Cuando se ejecuta el primer proceso asincrono, se ejecuta el segundo proceso asincrono (encadenar promesas)
pedirProducto('Monitor')
  .then(respuesta => {
    console.log('Respuesta recibida')
    console.log(respuesta)
    return procesarPedido(respuesta)    // Llamamos a procesarPedido tras recibir la respuesta aceeptada
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada)
  })
  .catch(err => {
    console.log(err)
  })



// async await

// con async indicamos que la función es asincrona
async function realizarPedido(producto) {
    try {
        const respuesta = await pedirProducto(producto)    // await nos permite esperar a que se resuelva la promesa
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)
    } catch (error) {
        console.log(error)
    }
}

realizarPedido('Monitor')