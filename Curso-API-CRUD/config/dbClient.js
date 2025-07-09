import mongoose from "mongoose";
import 'dotenv/config'; 

/*
  Utilizamos mongoose como herramienta para conectarnos a la base de datos
*/
class dbClient {
    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        const queryString = process.env.MONGO_URL;
        await mongoose.connect(queryString);
    }

    async cerrarConexion() {
        try {
            await mongoose.disconnect();
        } catch (error) {
            console.log(error);
        }
    }
}

export default new dbClient();