import request from 'supertest';
import { app } from '../index';  // Certifique-se de exportar o app no arquivo index.ts

let token: string;

describe('User Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should login and return a token', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    token = response.body.token;  // Armazena o token para testes futuros
  });

  it('should access protected route with valid token', async () => {
    const response = await request(app)
      .get('/api/projects')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
