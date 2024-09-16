import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Project } from './Project';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  status!: string;

  @Column()
  dueDate!: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user!: User;

  @ManyToOne(() => Project, (project) => project.tasks)
  project!: Project;

  constructor() {
    // Inicialização não necessária
  }
}
