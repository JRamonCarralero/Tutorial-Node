function saludar(nombe){
    return `hola ${nombe}`
}

function saludarHolaMundo(){
    return `¡Hola mundo!`
}

function despedir(nombe){
    return `adios ${nombe}`
}
 
// module.exports lo utilizamos para exportar las funciones
// Al ser un objeto, lo añadimos con .nombre = función si es una única función
/*
module.exports.saludar = saludar
*/
// Al haber varias funciones:
module.exports = {
    saludar,
    saludarHolaMundo,
    despedir
}