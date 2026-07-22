const { Client } = require("pg");
const { argv } = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  added TIMESTAMP,
  user VARCHAR (255),
  text VARCHAR (255)
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

// TODO: continue to work on inserting valid values into the local DB

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/message_board`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();