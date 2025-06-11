import { pool } from '../config/db.js';


export async function listUsers(){
    try {
        const query = 'SELECT id, name, email, password, role FROM users ';
        const results = await pool.query(query);
        return results.rows
    } catch (error) {
        console.log('Erro no banco ao listar usuários:', error);
        throw error;
    }
}
