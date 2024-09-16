import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';  // Certifique-se de que o caminho para o modelo está correto
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserController {
  // Criar usuário (Registro)
  static async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      const userRepository = getRepository(User);
      const userExists = await userRepository.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ message: 'Usuário já existe!' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      await userRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
  }

  // Login de usuário
  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: '1d',
      });

      return res.json({ token, user });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao fazer login', error });
    }
  }

  // Listar todos os usuários
  static async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao listar usuários', error });
    }
  }

  // Obter um usuário por ID
  static async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { id: Number(id) } }); // Corrigido

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao obter usuário', error });
    }
  }

  // Atualizar usuário
  static async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { id: Number(id) } }); // Corrigido

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }

      user.name = name || user.name;
      user.email = email || user.email;

      await userRepository.save(user);

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
  }

  // Deletar usuário
  static async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { id: Number(id) } }); // Corrigido

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      await userRepository.remove(user);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
  }
}
