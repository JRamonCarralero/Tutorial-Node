const EventEmitter = require('events') 

// Creamos una instancia de la clase EventEmitter
const emisorProductos = new EventEmitter()

// Creamos un evento y le asociamos una funcionalidad
// emisorProductos.on(nombre_evento, () => {})
// La función asociada se ejecutara cuando se dispare el evento y se le denomina Event Handler
emisorProductos.on('compra', (producto, total) => {
    console.log(`Se ha comprado el producto ${producto} por un total de ${total} euros`)
})

// Disparamos el evento
// emisorProductos.emit(ombre_evento, argumentos)
emisorProductos.emit('compra', 'Monitor', 345)