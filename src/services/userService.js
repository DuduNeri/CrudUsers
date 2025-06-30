import { pool } from '../config/db.js';
import bcrypt from 'bcrypt';

export async function updateUserService(id, data) {
    try {
        const { name, password } = data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'UPDATE users SET name = $1, password = $2 WHERE id = $3';
        const values = [name, hashedPassword, id];
        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            throw new Error('Usuário não encontrado');
        }
        return result.rows[0];
    } catch (error) {
        throw new Error(`Erro ao atualizar usuário:${error.message}}`);
    }
}

export async function listUsers() {
    try {
        const query = 'SELECT id, name, email, password, role FROM users ';
        const results = await pool.query(query);
        return results.rows
    } catch (error) {
        console.log('Erro no banco ao listar usuários:', error);
        throw error;
    }
}

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

export async function deleteUser(id) {
    try {
        const query = 'DELETE FROM users WHERE id = $1';
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            return null;
        }
        return { message: 'Usúario deletado com sucesso!' }
    } catch (error) {
        console.log('Erro ao deletar usuário', error);
        throw error;
    }
}

export async function registerUser({ name, email, password, role = 'user' }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
        INSERT INTO users (name, email, password, role) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id, name, email, role, created_at
    `;

    const values = [name, email, hashedPassword, role];

    const results = await pool.query(query, values);
    return results.rows[0];
}

const userService = {
    updateUserService,
    listUsers,
    getUserById,
    deleteUser,
    registerUser
}

export default userService;