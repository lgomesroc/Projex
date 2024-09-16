// src/routes/projectRoutes.js
import { Router } from 'express';
import { createProject, updateProject } from '../controllers/projectController';

const router = Router();

router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.get('/projects', getAllProjects); // Adicione essa linha se não estiver presente
router.get('/projects/:id', getProjectById); // Adicione essa linha se não estiver presente
router.delete('/projects/:id', deleteProject); // Adicione essa linha se não estiver presente



export default router;
