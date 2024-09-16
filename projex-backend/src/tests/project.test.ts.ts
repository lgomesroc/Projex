import request from 'supertest';
import { app } from '../index';  // Certifique-se de exportar o app no arquivo index.ts

let token: string;

beforeAll(async () => {
  // Adicionar lógica para obter um token válido
});

describe('Project Routes', () => {
  it('should create a new project', async () => {
    const response = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test Project',
        description: 'This is a test project',
        userId: 1,  // Substitua pelo ID real do usuário
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should update a project', async () => {
    const response = await request(app)
      .put('/api/projects/1')  // Substitua pelo ID real do projeto
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated Project',
        description: 'Updated description',
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Project');
  });

  it('should delete a project', async () => {
    const response = await request(app)
      .delete('/api/projects/1')  // Substitua pelo ID real do projeto
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
