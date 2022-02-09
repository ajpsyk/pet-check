const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT
} = process.env;

const client = new Client({
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: DB_PORT,
  database: "pet_check"
});
client.connect()
.then(() => {
  console.log("Connected to Postgres!")
});

module.exports = client;