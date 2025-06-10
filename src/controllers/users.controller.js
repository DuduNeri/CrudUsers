import { registerUser } from '../services/users.services.js';

export async function createUser(req, res) {
    const { name, email, password, role } = req.body;

    try {
        const newUser = await registerUser({ name, email, password, role });
        res.status(201).json({ message: 'User created successfully', user: newUser });
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }
    } catch (error) {
        console.log('Error  creating user:', error);
        res.status(500).json({ message: 'Internal server error' })
    }
}
