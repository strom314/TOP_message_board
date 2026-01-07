const fs = require("fs");
const { Pool } = require("pg");
const path = require("path");

module.exports = new Pool({
  connectionString: process.env.DATABASE_STRING,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync(path.join(__dirname, "../ca.pem")).toString(),
  },
});
