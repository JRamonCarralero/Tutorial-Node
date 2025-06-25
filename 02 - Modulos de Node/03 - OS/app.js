// Modulo OS
// El modulo OS nos permite acceder a la informacion del sistema operativo

const os = require("os")    // requiere la importacion del modulo

console.log(os.type())    // tipo de sistema operativo
console.log(os.homedir())    // ruta de la carpeta home
console.log(os.arch())    // arquitectura del sistema operativo
console.log(os.platform())    // plataforma del sistema operativo
console.log(os.release())    // version del sistema operativo
console.log(os.uptime())    // tiempo de uso del sistema operativo
console.log(os.userInfo)    // informacion del usuario