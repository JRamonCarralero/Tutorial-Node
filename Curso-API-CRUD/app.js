import express from 'express';
import 'dotenv/config';  // Para poder usar las variables de entorno
import routeMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/mascotas', routeMascotas);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
} catch (error) {
    console.log(error);
}