import bcrypt from 'bcrypt';
import { pool } from '../config/db.js';

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
