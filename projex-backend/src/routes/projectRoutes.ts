import { Router } from 'express';
import ProjectController from '../controllers/ProjectController'; // Corrigido para importar a instância padrão
import authMiddleware from '../middleware/authMiddleware'; // Corrigido para importar o middleware padrão

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
