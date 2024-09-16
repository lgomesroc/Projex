import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userRepository = AppDataSource.getRepository(User);

    // Verificar se o usuário já existe
    const userExists = await userRepository.findOneBy({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(newUser);
    return res.status(201).json(newUser);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    // Verificar se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Senha inválida!' });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1d' });

    return res.json({ token, user });
  }
}

export default new UserController();
