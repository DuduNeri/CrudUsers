import { listUsers } from '../services/list.services.js';

export async function getAllUsers(req, res) {
  try {
    const users = await listUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log('Erro ao listar usuários', error);
    res.sendStatus(500);
  }
}
