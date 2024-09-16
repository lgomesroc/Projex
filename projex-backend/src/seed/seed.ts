import { AppDataSource } from '../data-source';
import { Task } from '../models/Task';
import { User } from '../models/User';
import { Project } from '../models/Project';

const seed = async () => {
  const taskRepository = AppDataSource.getRepository(Task);
  const userRepository = AppDataSource.getRepository(User);
  const projectRepository = AppDataSource.getRepository(Project);

  const user = await userRepository.findOneBy({ email: 'user@example.com' });
  const project = await projectRepository.findOneBy({ name: 'Project Example' });

  if (!user || !project) {
    console.error('User or Project not found');
    return;
  }

  const task1 = taskRepository.create({
    name: 'Task 1',
    description: 'Description for Task 1',
    status: 'Pending',
    dueDate: new Date('2024-10-01'),  // Usando Date
    user: user,
    project: project
  });

  const task2 = taskRepository.create({
    name: 'Task 2',
    description: 'Description for Task 2',
    status: 'In Progress',
    dueDate: new Date('2024-10-05'),  // Usando Date
    user: user,
    project: project
  });

  const task3 = taskRepository.create({
    name: 'Task 3',
    description: 'Description for Task 3',
    status: 'Completed',
    dueDate: new Date('2024-10-10'),  // Usando Date
    user: user,
    project: project
  });

  await taskRepository.save([task1, task2, task3]);
};

seed().catch(err => console.error(err));
