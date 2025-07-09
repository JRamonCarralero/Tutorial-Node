import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

export function generarToken(email) {
    return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}