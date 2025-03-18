// promise 지원 -> async/await 사용 가능(클린코드 작성 가능)
const mysql = require("mysql2/promise");
require("dotenv").config();

// 연결 풀 사용 -> 성능 최적화
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;