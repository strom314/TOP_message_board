const pool = require("./pool");

async function test() {
  const table = await pool.query("SELECT * FROM message_board");
  console.log(table.rows);
}

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM message_board");
  return messages.rows;
}

async function insertMessage(name, message) {
  await pool.query(
    "INSERT INTO message_board (name, message, date_added) VALUES ($1, $2, $3)",
    [name, message, Date.now()]
  );
}

async function getMessage(id) {
  const message = await pool.query(
    `SELECT * FROM message_board WHERE messageid=${id}`
  );
  return message.rows;
}

module.exports = { test, getAllMessages, insertMessage, getMessage };
