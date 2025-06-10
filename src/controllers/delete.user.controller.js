import { deleteUser } from "../services/delete.user.services.js";

export async function deleteUserController(req, res) {
  const { id } = req.params;

  try {
    const result = await deleteUser(id);

    if (!result) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json(result); 
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    return res.status(500).json({ error: error.message });
  }
}
