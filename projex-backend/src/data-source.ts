import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '5577azcD@#',  // Senha do seu banco
  database: 'projex_db',      // Nome do banco de dados criado
  synchronize: true,
  logging: true,
  entities: ['src/models/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');
  })
  .catch((error) => console.log(error));
