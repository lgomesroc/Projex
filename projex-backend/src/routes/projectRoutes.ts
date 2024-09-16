import { Router } from 'express';
import ProjectController from '../controllers/ProjectController'; 
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Aplicar o middleware de autenticação
router.use(authMiddleware);

// Definir rotas para projetos
router.post('/projects', ProjectController.createProject);
router.get('/projects', ProjectController.getProjects);
router.get('/projects/:id', ProjectController.getProject);
router.put('/projects/:id', ProjectController.updateProject);
router.delete('/projects/:id', ProjectController.deleteProject);

export default router;
