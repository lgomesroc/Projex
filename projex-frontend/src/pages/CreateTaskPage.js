// src/pages/CreateTaskPage.js
import React, { useState } from 'react';
import Button from '../components/Button';

const CreateTaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados
  };

  return (
    <div className="container">
      <h1>Criar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Nome da Tarefa</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Detalhes</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Criar Tarefa</Button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
