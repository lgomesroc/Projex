import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Project } from '../models/Project';
import { User } from '../models/User';

class ProjectController {
  async createProject(req: Request, res: Response): Promise<Response> {
    const { name, description, userId } = req.body;

    const projectRepository = AppDataSource.getRepository(Project);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    const newProject = projectRepository.create({ name, description, user });
    await projectRepository.save(newProject);

    return res.status(201).json(newProject);
  }

  async getProjects(req: Request, res: Response): Promise<Response> {
    const projectRepository = AppDataSource.getRepository(Project);
    const projects = await projectRepository.find({ relations: ['user'] });

    return res.json(projects);
  }

  async getProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const projectRepository = AppDataSource.getRepository(Project);
    const project = await projectRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['user'],
    });

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado!' });
    }

    return res.json(project);
  }

  async updateProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, description } = req.body;

    const projectRepository = AppDataSource.getRepository(Project);
    const project = await projectRepository.findOneBy({ id: parseInt(id) });

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado!' });
    }

    project.name = name || project.name;
    project.description = description || project.description;

    await projectRepository.save(project);

    return res.json(project);
  }

  async deleteProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const projectRepository = AppDataSource.getRepository(Project);
    const project = await projectRepository.findOneBy({ id: parseInt(id) });

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado!' });
    }

    await projectRepository.remove(project);

    return res.status(204).send();
  }
}

export default new ProjectController();
