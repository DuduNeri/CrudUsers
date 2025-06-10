import { pool } from "../config/db.js";

export async function deleteUser(id) {
    try {
        const query = 'DELETE FROM users WHERE id = $1';
        const result = await pool.query(query, [id]);
        if(result.rowCount === 0){
         return null;
        }
        return {message: 'Usúario deletado com sucesso!'}
    } catch (error) {
        console.log('Erro ao deletar usuário', error);
        throw error;
    }
}