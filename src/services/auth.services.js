import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/db.js'; 

const SECRET_KEY = 'edu22';

export async function loginUser(email, password) {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if(user.rows.length === 0){
      throw new Error('Usuário não encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if(!validPassword){
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign({id: user.rows[0].id}, 
       SECRET_KEY,
       {expiresIn: '2h'}    
    );
    
    return {token};
};
