import { pool } from '../config/db.js';

export async function getUserById(id) {
  try {
    const query = 'SELECT id, name, email, role FROM users WHERE id = $1';
    const result = await pool.query(query, [id]); 

    if (result.rows.length === 0) {
      return null; 
    }

    return result.rows[0];
  } catch (error) {
    console.error('Erro no serviço ao buscar usuário por ID:', error);
    throw error; 
  }
}
