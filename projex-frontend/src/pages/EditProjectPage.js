// src/pages/EditProjectPage.js
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const EditProjectPage = ({ match }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const projectId = match.params.id;

  useEffect(() => {
    // Lógica para buscar os detalhes do projeto
  }, [projectId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para atualizar o projeto
  };

  return (
    <div className="container">
      <h1>Editar Projeto</h1>
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
        <Button type="submit">Atualizar Projeto</Button>
      </form>
    </div>
  );
};

export default EditProjectPage;
