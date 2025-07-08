import express from "express";
import mascotaController from '../controllers/mascotas.js';

const route = express.Router();

route.post('/', mascotaController.create);
route.get('/', mascotaController.getAll);
route.get('/:id',  mascotaController.getOne);
route.put('/:id', mascotaController.update);
route.delete('/:id', mascotaController.delete);

export default route;