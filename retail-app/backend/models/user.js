const db = require("../config/db");
const bcrypt = require("bcryptjs");

const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  await db.query(query, [username, email, hashedPassword]);
};

const findUserByEmail = async (email) => {
  const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return users[0]; // Return the first user found
};

module.exports = { createUser, findUserByEmail };
