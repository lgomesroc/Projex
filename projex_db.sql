-- Crie o banco de dados
CREATE DATABASE projex_db;

-- Use o banco de dados
USE projex_db;

-- Tabela de Usuários
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  photo BLOB
);

-- Tabela de Projetos
CREATE TABLE Project (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  userId INT,
  FOREIGN KEY (userId) REFERENCES User(id)
);

-- Tabela de Tarefas
CREATE TABLE Task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) NOT NULL,
  dueDate DATE NOT NULL,
  userId INT,
  projectId INT,
  FOREIGN KEY (userId) REFERENCES User(id),
  FOREIGN KEY (projectId) REFERENCES Project(id)
);

-- Inserir dados na tabela User
INSERT INTO User (name, email, password, photo) VALUES 
('João da Silva', 'joao.silva@example.com', 'hashed_password_1', NULL),
('Maria Oliveira', 'maria.oliveira@example.com', 'hashed_password_2', NULL);

-- Inserir dados na tabela Project
INSERT INTO Project (name, description, userId) VALUES 
('Projeto A', 'Descrição do Projeto A', 1),
('Projeto B', 'Descrição do Projeto B', 2);

-- Inserir dados na tabela Task
INSERT INTO Task (name, description, status, dueDate, userId, projectId) VALUES 
('Tarefa 1', 'Descrição da Tarefa 1', 'Pendente', '2024-10-01', 1, 1),
('Tarefa 2', 'Descrição da Tarefa 2', 'Em andamento', '2024-10-15', 1, 1),
('Tarefa 3', 'Descrição da Tarefa 3', 'Concluída', '2024-09-30', 2, 2);

SHOW CREATE TABLE Project;

ALTER TABLE Project DROP FOREIGN KEY FK_361a53ae58ef7034adc3c06f09f;
