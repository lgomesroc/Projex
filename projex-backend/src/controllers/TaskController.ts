import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Task } from '../models/Task';
import { Project } from '../models/Project';

class TaskController {
  async createTask(req: Request, res: Response) {
    const { name, description, status, dueDate, projectId } = req.body;
    
    const taskRepository = AppDataSource.getRepository(Task);
    const projectRepository = AppDataSource.getRepository(Project);

    const project = await projectRepository.findOneBy({ id: projectId });
    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado!' });
    }

    const newTask = taskRepository.create({ name, description, status, dueDate, project });
    await taskRepository.save(newTask);

    return res.status(201).json(newTask);
  }

  async getTasks(req: Request, res: Response) {
    const taskRepository = AppDataSource.getRepository(Task);
    const tasks = await taskRepository.find({ relations: ['project'] });

    return res.json(tasks);
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, status, dueDate } = req.body;

    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOneBy({ id: parseInt(id) });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada!' });
    }

    task.name = name || task.name;
    task.description = description || task.description;
    task.status = status || task.status;
    task.dueDate = dueDate || task.dueDate;

    await taskRepository.save(task);

    return res.json(task);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOneBy({ id: parseInt(id) });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada!' });
    }

    await taskRepository.remove(task);

    return res.status(204).send();
  }
}

export default new TaskController();
