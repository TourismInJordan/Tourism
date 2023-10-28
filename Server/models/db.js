const { Pool } = require("pg");

const pool = new Pool({
  user: "laith",
  password: "123",
  host: "localhost",
  port: 5433, 
  database: "Blogs",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
