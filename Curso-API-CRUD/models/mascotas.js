import Mascota from "../schemas/mascotas.js";
import { ObjectId } from "mongodb";


class mascotasModel {

    async create(mascota) {
        return await Mascota.create(mascota);
    }

    async getAll() {
        return await Mascota.find();
    }

    async getOne(id) {
        return await Mascota.findById({_id: new ObjectId(id)});
    }

    async update(id, mascota) {
        return await Mascota.findOneAndUpdate({_id: new ObjectId(id)}, mascota, {new: true});
    }

    async delete(id) {
        return await Mascota.findOneAndDelete({_id: new ObjectId(id)});
    }
}

export default new mascotasModel();