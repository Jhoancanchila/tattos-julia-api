const postgres = require("postgres");
const { config } = require("./src/config/config");

const connectionString = config.dbPostgresUrl
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined')
}

const sql = postgres(connectionString);

console.log('Conexión a PostgreSQL establecida.')
module.exports = sql;


