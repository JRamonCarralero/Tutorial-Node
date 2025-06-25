// Modulo fs
// El modulo fs nos permite acceder a la informacion del sistema de ficheros
// Todos los métodos de fs son asíncronos
// Tenemos la opción de tener los métodos de forma síncrona llamando al metodoSync() y asincrona llamando al metodo()

const fs = require("fs")    // requiere la importacion del modulo

// Leer archivo
// fs.readFile('archivo', codificación, función)
// fs.readFileSync('archivo', codificación) no necesita de función porque se hace de forma sincrona
function leerArchivo() {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            throw err    // si hay un error, lanzamos el error y detenemos el programa
        }
        console.log(data)
    })
}


// Cambiar el nombre de un archivo
// fs.rename('archivo', 'archivo2', función)
// fs.renameSync('archivo', 'archivo2')
function cambiarNombre() {
    fs.rename('index.html', 'main.html', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('Nombre cambiado a main.html')
    })
}


// Agregar contenido al final de un archivo
// fs.appendFile('archivo', 'contenido', functionName)
// fs.appendFileSync('archivo', 'contenido')
function agregarContenido() {
    fs.appendFile('index.html', '<p>Contenido agregado al final del archivo</p>', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('Contenido agregado al final del archivo')
    })
}

// Reemplazar todo el contenido del archivo (Tb lo escribe si no existe)
// fs.writeFile('archivo', 'contenido', functionName)
// fs.writeFileSync('archivo', 'contenido')
function reemplazarContenido() {
    fs.writeFile('index.html', '<p>Contenido reemplazado</p>', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('Contenido reemplazado')
    })
}

function crearArchivo() {
    fs.writeFile('main.html', '<p>Contenido</p>', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('Archivo creado')
    })
}

// Eliminar un archivo
// fs.unlink('archivo', functionName)
// fs.unlinkSync('archivo')
function eliminarArchivo() {
    fs.unlink('main.html', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('Archivo eliminado')
    })
}

// leerArchivo()
// cambiarNombre()
// agregarContenido()
// reemplazarContenido()
// crearArchivo()
// eliminarArchivo()