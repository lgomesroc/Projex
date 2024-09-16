// src/pages/CreateProjectPage.js
import React, { useState } from 'react';
import Button from '../components/Button'; // Componente de botão reutilizável

const CreateProjectPage = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados
  };

  return (
    <div className="container">
      <h1>Criar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Nome do Projeto</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Criar Projeto</Button>
      </form>
    </div>
  );
};

export default CreateProjectPage;
