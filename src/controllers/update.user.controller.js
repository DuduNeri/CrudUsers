import { updateUserService } from '../services/update.user.services.js';

export async function updateUserController(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateUser = await updateUserService(id, data);
        return res.status(200).send(updateUser);
    } catch (error) {
        return res.status(400).json({error: 'Erro ao atualizar o usuário'});
    }
}