const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Munachimuso',
  database: 'book_recommendation',
  host: 'localhost',
  port: 5432,
});

module.export = pool;
