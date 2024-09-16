import { getRepository, Repository } from 'typeorm';
import { Task } from '../models/Task';

export class TaskService {
  private taskRepository: Repository<Task> = getRepository(Task);

  public async createTask(data: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(data);
    return this.taskRepository.save(task);
  }

  public async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  public async getTaskById(id: number): Promise<Task | undefined> {
    const task = await this.taskRepository.findOne({ where: { id } });
    return task ?? undefined; // Converte null para undefined
  }

  public async updateTask(id: number, data: Partial<Task>): Promise<Task | undefined> {
    await this.taskRepository.update(id, data);
    return this.getTaskById(id);
  }

  public async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
