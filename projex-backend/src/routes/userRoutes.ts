// src/routes/userRoutes.ts
import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Rotas públicas
router.post('/register', UserController.createUser);  // Rota para registrar um novo usuário
router.post('/login', UserController.login);          // Rota para login

// Rotas protegidas com autenticação
router.get('/users', authMiddleware, UserController.getUsers);             // Listar todos os usuários
router.get('/users/:id', authMiddleware, UserController.getUserById);      // Obter um usuário por ID
router.put('/users/:id', authMiddleware, UserController.updateUser);       // Atualizar um usuário por ID
router.delete('/users/:id', authMiddleware, UserController.deleteUser);    // Deletar um usuário por ID

export default router;
