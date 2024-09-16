import express from 'express';
import 'dotenv/config'; // Adiciona isso para carregar variáveis de ambiente
import authRoutes from './src/routes/authRoutes'; // Verifique se o caminho está correto

const app = express();

app.use(express.json()); // Configura o Express para usar JSON
app.use('/api/auth', authRoutes); // Adiciona as rotas de autenticação

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
