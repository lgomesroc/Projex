import request from 'supertest';
import { app } from '../index';  // Certifique-se de exportar o app no arquivo index.ts

let token: string;

beforeAll(async () => {
  // Adicionar lógica para obter um token válido
  // Por exemplo, você pode fazer uma requisição para o endpoint de login
  const loginResponse = await request(app)
    .post('/api/auth/login')  // Substitua pelo endpoint de login real
    .send({
      username: 'testuser',  // Substitua pelos dados reais
      password: 'testpassword',
    });

  token = loginResponse.body.token;  // Certifique-se de que o token está sendo retornado corretamente
});

describe('Task Routes', () => {
  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test Task',
        description: 'This is a test task',
        status: 'pending',
        dueDate: new Date().toISOString(),  // Certifique-se de que a data está no formato ISO
        projectId: 1,  // Substitua pelo ID real do projeto
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should update a task', async () => {
    const response = await request(app)
      .put('/api/tasks/1')  // Substitua pelo ID real da tarefa
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated Task',
        description: 'Updated description',
        status: 'completed',
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    const response = await request(app)
      .delete('/api/tasks/1')  // Substitua pelo ID real da tarefa
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
