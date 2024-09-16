// src/routes/userRoutes.js
import { Router } from 'express';
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = Router();

// Rota para criar um usuário
router.post('/users', createUser);

// Rota para obter um usuário por ID
router.get('/users/:id', getUserById);

// Rota para atualizar um usuário
router.put('/users/:id', updateUser);

// Rota para deletar um usuário
router.delete('/users/:id', deleteUser);

export default router;
