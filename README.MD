# Projex - Projeto de Gerenciamento de Projetos

![Venha conhecer o projeto Projex.](th.jpg)

**Projeto Projex** é um sistema de gerenciamento de projetos intuitivo e eficiente, desenvolvido para facilitar a organização e o acompanhamento de projetos e tarefas. Com uma interface **clean** e **funcional**, ele permite que os usuários registrem, visualizem, editem e removam projetos e tarefas, além de atribuir responsabilidades e controlar o status de cada tarefa. O sistema inclui funcionalidades de **autenticação** e **proteção de rotas**, utilizando **Node.js** para o backend e **ReactJS** para o frontend.

### Dependências do Frontend

```plaintext
projex-frontend@0.1.0 C:\Users\lgome\OneDrive\Área de Trabalho\projex\projex-frontend
+-- @react-navigation/native@6.1.18
+-- @react-navigation/stack@6.4.1
+-- @testing-library/jest-dom@5.17.0
+-- @testing-library/react@13.4.0
+-- @testing-library/user-event@13.5.0
+-- axios@1.7.7
+-- jwt-decode@4.0.0
+-- react-dom@18.3.1
+-- react-icons@5.3.0
+-- react-router-dom@6.26.2
+-- react-scripts@5.0.1
+-- react@18.3.1
+-- styled-components@6.1.13
`-- web-vitals@2.1.4
```

### Dependências do Backend
```plaintext
+-- @types/bcrypt@5.0.2
+-- @types/express@4.17.21
+-- @types/jest@29.5.13
+-- @types/jsonwebtoken@9.0.6
+-- @types/supertest@6.0.2
+-- @types/swagger-ui-express@4.1.6
+-- @types/yamljs@0.2.34
+-- bcrypt@5.1.1
+-- dotenv@16.4.5
+-- express@4.21.0
+-- jest@29.7.0
+-- jsonwebtoken@9.0.2
+-- mysql@2.18.1
+-- mysql2@3.11.2
+-- projex-backend@1.0.0 -> .\
+-- reflect-metadata@0.2.2
+-- supertest@7.0.0
+-- swagger-ui-express@5.0.1
+-- ts-jest@29.2.5
+-- ts-node-dev@2.0.0
+-- typeorm@0.3.20
+-- typescript@5.6.2
`-- yamljs@0.3.0
```

## Tecnologias Utilizadas

- **Frontend:** ReactJS
- **Backend:** Node.js com ExpressJS
- **Banco de Dados:** MySQL
- **ORM:** TypeORM
- **Criptografia de Senha:** bcrypt
- **Autenticação:** JWT
- **TypeScript** como linguagem de programação

## Funcionalidades

- Cadastro, visualização, edição e remoção de projetos e tarefas
- Autenticação de usuários com JWT e criptografia de senha
- Armazenamento de imagens em formato BLOB
- Proteção de rotas e páginas

## Configuração do Projeto

### Backend

**Instalação das Dependências**

   Navegue até a pasta do backend e instale as dependências:

   ```bash
   cd projex-backend
   npm install
   ```
## Rodando o Backend

Execute o servidor:

```bash
npm start
```

## Frontend

### Instalação das Dependências

Navegue até a pasta do frontend e instale as dependências:

```bash
cd projex-frontend
npm install
```

O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

## Gerador de Senha Aleatória

Se você precisar criar uma senha aleatória e não conseguir utilizar o sistema para gerar uma senha, você pode usar um gerador de senha aleatória. Aqui está um exemplo de como gerar uma senha aleatória usando o `openssl`:

```bash
openssl rand -base64 32
```

Se o `openssl` não estiver disponível no seu sistema, você pode utilizar outros geradores de senha disponíveis online ou em ferramentas específicas.


## Migrations

Certifique-se de que as migrations estão configuradas corretamente e execute-as para criar as tabelas necessárias no banco de dados:

```bash
npm run typeorm migration:run


# Estrutura do Projeto

## Backend
- `src/controllers`: Contém os controladores das rotas.
- `src/routes`: Define as rotas e a lógica das APIs.
- `src/services`: Implementa a lógica de negócio.
- `src/migrations`: Migrations para criar e atualizar as tabelas no banco de dados.

## Frontend
- `src/components`: Componentes reutilizáveis.
- `src/pages`: Páginas principais do aplicativo.
- `src/routes`: Define as rotas e as páginas protegidas.
- `src/services`: Serviços para comunicação com o backend.
- `src/styles`: Arquivos de estilo.

## Melhorias Recomendadas
- **Validação de Formulários**: Adicione validação para garantir que os dados inseridos sejam válidos.
- **Tratamento de Erros**: Implemente tratamento de erros e mensagens de feedback para melhorar a experiência do usuário.
- **Design**: Verifique se o design está consistente com o planejado e ajuste qualquer detalhe visual.

## Observações
- O sistema pode ser aprimorado com features adicionais como relatórios e notificações.
- As instruções para o dump do banco de dados devem ser seguidas conforme a documentação fornecida.

##Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto. Para contribuições, siga estas diretrizes:

Fork o repositório.
Crie uma branch para suas alterações (git checkout -b feature/nova-funcionalidade).
Faça commit das suas alterações (git commit -am 'Adiciona nova funcionalidade').
Faça push para a branch (git push origin feature/nova-funcionalidade).
Abra um pull request.
Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Contato
Luciano Rocha - lgomesroc2012@gmail.com
WhatsApp - (21)9-92199579

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

# README

Este README.md cobre a configuração do projeto, orientações para o backend e frontend, e inclui sugestões para melhorias.



