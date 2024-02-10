const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Configurar a conexão com o banco de dados usando as variáveis de ambiente
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;