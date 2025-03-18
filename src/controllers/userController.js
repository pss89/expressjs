const pool = require("../config/db");

// 유저 조회
const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
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