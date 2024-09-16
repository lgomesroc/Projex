import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Pega o token do cabeçalho de autorização
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido.' }); // Retorna resposta de erro
    return; // Garante que não prossegue com o middleware
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Adiciona o usuário decodificado à requisição
    next(); // Prossegue com o próximo middleware ou rota
  } catch (err) {
    res.status(401).json({ message: 'Token inválido.' }); // Retorna resposta de erro
  }
};

export default authMiddleware;

