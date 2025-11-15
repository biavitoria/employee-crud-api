/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * data: 14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};