const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function postNewMessage(added, username, text) {
  const SQL = `
  INSERT INTO messages (added, username, text) 
  VALUES
    ('${added}', '${username}', '${text}');
  `;
  await pool.query(SQL);
}

async function getMessageDetails(id) {
  const row = await pool.query(`SELECT * FROM messages WHERE id = '${id}'`);
  return row;
}

module.exports = {
  getAllMessages,
  postNewMessage,
  getMessageDetails
};



// async function getAllUsernames() {
//   const { rows } = await pool.query("SELECT * FROM usernames");
//   return rows;
// }

// async function searchUsernames(input) {
//   const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${input}%'`);
//   console.log(rows);
//   return rows;
// }

// async function deleteAllUsernames() {
//   // DELETE FROM table_name;
//   await pool.query("DELETE FROM usernames");
// }


// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }