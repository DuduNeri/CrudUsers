import express from 'express';
import { createUser } from '../controllers/users.controller.js';
import { getAllUsers } from '../controllers/list.controller.js';
import { getUser } from '../controllers/listUser.controller.js';
import { deleteUserController } from '../controllers/delete.user.controller.js';
import { updateUserController } from '../controllers/update.user.controller.js';



const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUserController);
router.put('/user/:id', updateUserController);


export default router;
