import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/imageController';

// Configuração do armazenamento com multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Nome do arquivo pode ser configurado aqui, se necessário
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const router = Router();

// Rota para enviar uma imagem
router.post('/images', upload.single('image'), uploadImage);

export default router;
