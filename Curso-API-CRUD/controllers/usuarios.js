import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { generarToken } from '../helpers/autenticacion.js';

class usuariosController {
    constructor() {}

    async register(req, res) {
        try {
            const { email, nombre, telefono, clave } = req.body;

            const usuarioExiste = await usuariosModel.getOneByMail(email);
            if (usuarioExiste) {
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const claveEncriptada = await bcrypt.hash(clave, 10);
            const data = await usuariosModel.create({ email, nombre, telefono, clave: claveEncriptada });
            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req, res) {
        const { email, clave } = req.body;
        const usuario = await usuariosModel.getOneByMail(email);
        if (!usuario) {
            return res.status(400).json({ error: 'El usuario no existe' });
        }
        const claveValida = await bcrypt.compare(clave, usuario.clave);
        if (!claveValida) {
            return res.status(400).json({ error: 'La clave es incorrecta' });
        }

        const token = generarToken(email);

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    }
}

export default new usuariosController(); 