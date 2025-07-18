import express from "express";
import mascotaController from '../controllers/mascotas.js';
import { verificarToken } from '../helpers/autenticacion.js';

const route = express.Router();

route.post('/', mascotaController.create);
route.get('/', mascotaController.getAll);
route.get('/:id',  mascotaController.getOne);
route.put('/:id', verificarToken, mascotaController.update);
route.delete('/:id', verificarToken, mascotaController.delete);

export default route;