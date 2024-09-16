// src/services/userService.ts
import { getRepository } from 'typeorm';
import { User } from '../models/User';

export class UserService {
  private userRepository = getRepository(User);

  public async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async getUserById(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user ?? undefined; // Converte null para undefined  
  }

  public async updateUser(id: number, data: Partial<User>): Promise<User | undefined> {
    await this.userRepository.update(id, data);
    return this.getUserById(id);
  }

  public async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
