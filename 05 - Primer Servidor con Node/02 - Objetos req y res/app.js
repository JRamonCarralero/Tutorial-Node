const http = require('http')

const server = http.createServer((req, res) => {
    // req
    console.log('==> req (solicitud)')
    // imprimimos la url 
    console.log(req.url)
    // imprimimos el metodo
    console.log(req.method)
    // imprimimos los headers
    console.log(req.headers)


    // res
    console.log('==> res (respuesta)')
    // imprimimos el status
    console.log(res.statusCode) // 200 por defecto (OK)
    res.statusCode = 404 // cambiamos el status a error
    console.log(res.statusCode)
    // imprimimos los headers
    res.setHeader('content-type', 'application/json');  // establecemos el header
    console.log(res.getHeaders())

    // enviamos la respuesta
    res.end('Hola mundo')
})

const puerto = 3000

server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`)
})