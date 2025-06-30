# Express

Para comenzar, necesitamos crear la aplicación para añadirle después express

```bash
npm init
```

Ahora instalamos express

```bash
npm install express
```

Se instalan todas las dependencias de express, podemos verlo en el package.json, package-lock.json y node_modules

## Iniciar el servidor

Para iniciar el servidor, es igual que con Node.js

```bash
node app.js
```

## Rutas

Para definir las rutas:

```javascript
app.<metodo>(ruta, callback)
```

Por ejemplo:

```javascript
app.get("/", (req, res) => {
    res.json("Mi primer servidor con Node.js y Express");
});
```
