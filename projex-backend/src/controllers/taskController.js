// src/controllers/taskController.js
import { getRepository } from 'typeorm';
import { Task } from '../models/Task';

export const createTask = async (req, res) => {
  const { name, details, projectId } = req.body;
  try {
    const taskRepository = getRepository(Task);
    const newTask = taskRepository.create({ name, details, project: { id: projectId } });
    await taskRepository.save(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa' });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, details } = req.body;
  try {
    const taskRepository = getRepository(Task);
    const task = await taskRepository.findOne(id);
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

    task.name = name;
    task.details = details;
    await taskRepository.save(task);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
};
