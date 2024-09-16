// src/controllers/projectController.js
import { getRepository } from 'typeorm';
import { Project } from '../models/Project';

export const createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const projectRepository = getRepository(Project);
    const newProject = projectRepository.create({ name, description });
    await projectRepository.save(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar projeto' });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const projectRepository = getRepository(Project);
    const project = await projectRepository.findOne(id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });

    project.name = name;
    project.description = description;
    await projectRepository.save(project);

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar projeto' });
  }
};

export const getAllProjects = async (req, res) => {
    try {
      const projectRepository = getRepository(Project);
      const projects = await projectRepository.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar projetos' });
    }
  };
  
  export const getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
      const projectRepository = getRepository(Project);
      const project = await projectRepository.findOne(id);
      if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter projeto' });
    }
  };

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
      const projectRepository = getRepository(Project);
      const result = await projectRepository.delete(id);
      if (result.affected === 0) return res.status(404).json({ message: 'Projeto não encontrado' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover projeto' });
    }
  };
  
