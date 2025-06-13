import express from 'express';
import { createUser } from '../controllers/add.user.controller.js';
import { getAllUsers } from '../controllers/list.users.controller.js';
import { getUser } from '../controllers/list.user.controller.js';
import { deleteUserController } from '../controllers/delete.user.controller.js';
import { updateUserController } from '../controllers/update.user.controller.js';
import { loginController } from '../controllers/login.controller.js';
import { authenticateToken } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/login', loginController);
router.post('/user', createUser);
router.get('/users', authenticateToken, getAllUsers);
router.get('/user/:id', authenticateToken, getUser);
router.delete('/user/:id', deleteUserController);
router.put('/user/:id', updateUserController);



export default router;
