import { Request, Response } from 'express';

export const uploadImage = (req: Request, res: Response): Response => {
  if (!req.file) {
    return res.status(400).json({ message: 'Nenhuma imagem foi enviada' });
  }

  // Aqui você pode processar o arquivo, como salvá-lo em um banco de dados ou fazer outras operações

  return res.status(200).json({ message: 'Imagem enviada com sucesso', file: req.file });
};
 