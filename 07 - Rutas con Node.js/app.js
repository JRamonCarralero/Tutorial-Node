const http = require("http");
const cursos = require("./cursos.js");

const server = http.createServer((req, res) => {
    // Obtenemos el metodo
    const {method} = req;
    // const metodo = req.method    es otra forma de acceder

    // Comprobamos el metodo
    switch (method) {
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        default:
            // Si no se encuentra el metodo, error de servidor
            res.statusCode = 501;
            res.end(`El metodo ${method} no es soportado`);
    }
});

function manejarSolicitudGET(req, res) {
    // Obtenemos la ruta
    const path = req.url;

    // Comprobamos la ruta para enviar la respuesta
    if (path === "/") {
        res.statusCode = 200;   // 200 por defecto
        return res.end('Bienvenidos a mi primer servidor y API de Node.js');
    } else if (path === "/cursos") {
        // res.statusCode = 200;    Este es el codigo por defecto
        return res.end(JSON.stringify(cursos));
    } else if (path === "/cursos/programacion") {
        res.writeHead(200, {'Content-Type': 'application/json'});   // 200 por defecto, especificamos el header
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    // Si no se encuentra la ruta
    res.statusCode = 404;
    return res.end('Ruta no encontrada');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    console.log(path);

    if (path === "/cursos/programacion") {
        // creamos la variable para almacenar el body
        let body = '';
        // leemos el body
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        // cuando termina de leer el body
        req.on('end', () => {
            console.log(body);
            console.log(typeof body);

            const nuevoCurso = JSON.parse(body);
            cursos.infoCursos.programacion.push(nuevoCurso);
            // mostramos lo creado
            console.log(nuevoCurso);
            console.log(cursos.infoCursos.programacion);

            return res.end('Curso creado');
        });
        return; 
    }

    res.statusCode = 404;
    return res.end('Metodo no soportado');
}

const puerto = 3000;    

server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});