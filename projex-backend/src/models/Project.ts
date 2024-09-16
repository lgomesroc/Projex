import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Task } from './Task';
import { User } from './User';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @ManyToOne(() => User, (user) => user.projects)
  user!: User;

  @OneToMany(() => Task, (task) => task.project)
  tasks!: Task[];  // Remova a inicialização aqui

  constructor() {
    // Inicialização não necessária
  }
}
