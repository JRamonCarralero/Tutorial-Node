import { MongoClient } from "mongodb";
import 'dotenv/config'; 

class dbClient {
    constructor() {
        const queryString = process.env.MONGO_URL;
        this.client = new MongoClient(queryString);
        this.conectarDB();
    }

    async conectarDB() {
        try {
            await this.client.connect();
            this.db = this.client.db('adopcion');
            console.log("Conectado a la base de datos");
        } catch (error) {
            console.log(error);
        }
    }
}

export default new dbClient;