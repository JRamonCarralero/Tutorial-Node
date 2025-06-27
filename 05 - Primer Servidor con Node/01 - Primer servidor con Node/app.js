// Impotamos el modulo http
const http = require("http");

// Creamos el servidor
const server = http.createServer((req, res) => {
    res.end("Hola mundo");
});

const puerto = 3000;

// Ponemos el servidor a escuchar en el puerto 3000
server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});