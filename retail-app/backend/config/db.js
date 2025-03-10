const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // ✅ Use 'root' instead of 'Suhaib'
  password: '$uh@ibKh@n25', // ✅ Enter the actual password for root
  database: 'retail_db' // ✅ Use the correct database name
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

module.exports = connection;
