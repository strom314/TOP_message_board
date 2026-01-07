const pool = require("./pool");

async function test() {
  const table = await pool.query("SELECT * FROM test");
  console.log(table.rows);
}

module.exports = { test };
