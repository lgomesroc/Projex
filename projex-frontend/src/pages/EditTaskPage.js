// src/pages/EditTaskPage.js
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const EditTaskPage = ({ match }) => {
  const [taskName, setTaskName] = useState('');
  const [details, setDetails] = useState('');
  const taskId = match.params.id;

  useEffect(() => {
    // Lógica para buscar os detalhes da tarefa
  }, [taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para atualizar a tarefa
  };

  return (
    <div className="container">
      <h1>Editar Tarefa</h1>
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
        <Button type="submit">Atualizar Tarefa</Button>
      </form>
    </div>
  );
};

export default EditTaskPage;
