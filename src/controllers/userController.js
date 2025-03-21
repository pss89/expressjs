const pool = require("../config/db");

// 유저 조회
const getUsers = async (req, res) => {
  try {
    // const [rows] = await pool.query("SELECT * FROM users");
    // res.json(rows);

    const { name, email } = req.query;

    console.log("Received request with name:", name, "email:", email);  // 디버그 로그
    
    let query = "SELECT * FROM users WHERE 1=1";
    const values = [];

    if (name) {
      query += " AND name = ?";
      values.push(name);
    }
    if (email) {
      query += " AND email = ?";
      values.push(email);
    }

    const [users] = await pool.query(query, values);
    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ error: "서버 오류" });
  }
};

// 유저 추가
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "모든 필드를 입력하세요" });

    const [result] = await pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);

    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: "서버 오류" });
  }
};

module.exports = { getUsers, createUser };