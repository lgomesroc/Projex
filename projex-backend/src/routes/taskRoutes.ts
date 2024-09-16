import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import authMiddleware from '../middleware/authMiddleware'; // Corrigido

const router = Router();

router.post('/tasks', authMiddleware, TaskController.createTask);  // Protegido
router.get('/tasks', authMiddleware, TaskController.getTasks);    // Protegido
router.put('/tasks/:id', authMiddleware, TaskController.updateTask); // Protegido
router.delete('/tasks/:id', authMiddleware, TaskController.deleteTask); // Protegido

export default router;
