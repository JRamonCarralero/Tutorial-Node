# Crear servidor con Node.js

Debemos importar el módulo http

```javascript
const http = require('http');
```

Ahora debemos crear un servidor con el módulo http

```javascript
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});
```

Ahora debemos escuchar el puerto 3000

```javascript
server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```

Para arrancar el servidor debemos, en el terminar, ir a la carpeta del proyecto y escribir:

```bash
node app.js
```

En este caso el archivo se llama app.js, sustituir por el archivo correspondiente.

Ahora debemos abrir el navegador y acceder a <http://127.0.0.1:3000/>
