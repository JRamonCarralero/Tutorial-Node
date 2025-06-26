// Tenemos una tienda de pizzas y nuestro sistema de pedidos es asincrono. 
// Puede tomar unos segundos procesar el pedido y la operacion tambien puede fallar algunas veces.
const estatusPedido = () => {
  // Math.random() genera un numero aleatorio entre 0 y 1.
  const estatus = Math.random() < 0.8;
  // Para ver el estatus en el terminal. 
  // Incluido solamente para probar la aplicacion.
  console.log(estatus);
  return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  // setTimeout() simula el tiempo que tardaria la operacion
  // de procesar la compra y agregarla a una base de datos.
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino.');
    } else {
      reject('Ocurrio un error. Por favor intente nuevamente.');
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);

// Sintaxis alternativa: encadenar .then()
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  });