import { deleteUser, listUsers, registerUser, updateUserService } from "../services/userService.js";

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

export async function createUserController(req, res) {
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

export async function getAllUsersController(req, res) {
  try {
    const users = await listUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log('Erro ao listar usuários', error);
    res.sendStatus(500);
  }
}

export async function updateUserController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateUser = await updateUserService(id, data);
    delete updateUser.password;
    return res.status(200).json({ updateUser: "Usuário atualizado com sucesso!" });
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao atualizar o usuário' });
  }
}

export async function getUserController(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log('Erro ao listar usuário', error);
    res.sendStatus(500);
  }
}

const userController = {
  deleteUserController,
  createUserController,
  getAllUsersController,
  getUserController,
  updateUserController
}

export default userController;
