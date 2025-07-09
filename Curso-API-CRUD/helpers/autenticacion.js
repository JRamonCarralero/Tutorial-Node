import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

export function generarToken(email) {
    return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}


// Al ser un middlewarw usamos next para indicar que hay funciones después
export function verificarToken(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    try{
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        console.log(dataToken.email);
        next();
    } catch (e) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}