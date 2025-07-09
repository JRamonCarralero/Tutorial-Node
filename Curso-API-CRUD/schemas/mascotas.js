import mongoose from "mongoose";

/*
    Definimos el esquema de la coleccion mascotas
*/
const mascotaSchema = new mongoose.Schema(
    {
        nombre: { 
            type: String,
            required: true
        },
        tipo: { 
            type: String,
            required: true,
            enum: [
                'Perro', 'Gato', 'Conejo'
            ]
        },
        raza: {
            type: String
        },
        edad: {
            type: Number,
            min: [0, 'La edad no puede ser menor a 0 años'],
            max: [30, 'La edad no puede ser mayor a 30 años']
        },
        descripcion: {
            type: String
        },
        adoptado: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps: true
    }
);

export default mongoose.model('mascotas', mascotaSchema);