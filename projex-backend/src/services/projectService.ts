import { getRepository, Repository } from 'typeorm';
import { Project } from '../models/Project';

export class ProjectService {
  private projectRepository: Repository<Project> = getRepository(Project);

  public async createProject(data: Partial<Project>): Promise<Project> {
    const project = this.projectRepository.create(data);
    return this.projectRepository.save(project);
  }

  public async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    const project = await this.projectRepository.findOne({ where: { id } });
    return project ?? undefined; // Converte null para undefined
  }

  public async updateProject(id: number, data: Partial<Project>): Promise<Project | undefined> {
    await this.projectRepository.update(id, data);
    return this.getProjectById(id);
  }

  public async deleteProject(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
