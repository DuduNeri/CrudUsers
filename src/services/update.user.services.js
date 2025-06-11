import { pool } from '../config/db.js';
import bcrypt from 'bcrypt';

export async function updateUserService(id, data) {
    try {
        const { name, password} = data;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'UPDATE users SET name = $1, password = $2 WHERE id = $3';
        const values = [name, hashedPassword, id];
        const result = await pool.query(query, values);
        
        if(result.rowCount === 0){
            throw new Error('Usuário não encontrado');
        }
        return result.rows[0];
    } catch (error) {
        throw new Error(`Erro ao atualizar usuário:${error.message}}`);
    }
}