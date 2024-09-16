// src/controllers/imageController.js
import fs from 'fs';
import path from 'path';

export const uploadImage = async (req, res) => {
  const { file } = req;
  try {
    // Lógica para salvar informações da imagem no banco de dados ou em outro local
    res.status(200).json({ message: 'Imagem enviada com sucesso', file });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar imagem' });
  }
};
