import express from 'express';
import { json } from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import authMiddleware from './middleware/authMiddleware';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import authRoutes from './routes/authRoutes'; // Importar a rota de autenticação

dotenv.config(); // Carrega variáveis de ambiente

const app = express();

app.use(json());

// Configuração do Swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use('/api/tasks', authMiddleware, taskRoutes);

app.use('/api/auth', authRoutes); // Adicionar a rota de autenticação


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app };
