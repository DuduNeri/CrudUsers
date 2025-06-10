import { getUserById } from '../services/listUser.services.js';

export async function getUser(req, res){
   const {id} = req.params;
   try {
    const user = await getUserById(id);
    if(!user){
      return res.status(404).json({error: 'Usuário não encontrado'});
    }else{
      res.status(200).json(user);
    }
   } catch (error) {
    console.log('Erro ao listar usuário', error);
    res.sendStatus(500);
   }
}