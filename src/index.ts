import express from 'express';
import dotenv from 'dotenv';
import swaggerRouter from './swagger'; // Importa o arquivo de configuração do Swagger

const pool = require('./database/db');

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Adiciona o middleware do Swagger à sua aplicação
app.use('/api-docs', swaggerRouter);

// Rota de exemplo para realizar uma consulta ao banco de dados
app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Connected!']);
    const message = result.rows[0].message;
    res.send(`Message from database: ${message}`);
    client.release();
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/serverUp', async (req, res) => {
    res.send('Server is up and running!');
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});