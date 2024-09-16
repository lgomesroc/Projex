// src/routes/imageRoutes.js
import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/imageController';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// Rota para enviar uma imagem
router.post('/images', upload.single('image'), uploadImage);

export default router;
