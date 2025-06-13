import  { loginUser } from '../services/auth.services.js';

export async function loginController(req, res) {
   const { email, password } = req.body;
    
   try {
    const results = await loginUser(email, password);
    res.json(results);
   } catch (error) {
    res.status(400).json(error.message)
   }
}
