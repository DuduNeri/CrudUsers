import { updateUserService } from '../services/update.user.services.js';

export async function updateUserController(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateUser = await updateUserService(id, data);
        delete updateUser.password;
        return res.status(200).json({updateUser:"Usuário atualizado com sucesso!"});
    } catch (error) {
        return res.status(400).json({error: 'Erro ao atualizar o usuário'});
    }
}