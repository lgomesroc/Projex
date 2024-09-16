import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Project } from './Project';
import { Task } from './Task';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true, type: 'blob' })
  photo!: Buffer | null;

  @OneToMany(() => Project, (project) => project.user)
  projects!: Project[];  // Remova a inicialização aqui

  @OneToMany(() => Task, (task) => task.user)
  tasks!: Task[];  // Remova a inicialização aqui

  constructor() {
    // Inicialização não necessária
  }
}
