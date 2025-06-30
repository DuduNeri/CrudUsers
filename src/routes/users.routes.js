import express from 'express';
import { createUserController, deleteUserController, getAllUsersController, getUserController, updateUserController } from '../controllers/userController.js';
import { loginController } from '../controllers/login.controller.js';
import { authenticateToken } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/login', loginController);
router.post('/user', createUserController);
router.get('/users', authenticateToken, getAllUsersController);
router.get('/user/:id', authenticateToken, getUserController);
router.delete('/user/:id', deleteUserController);
router.put('/user/:id', updateUserController);



export default router;
