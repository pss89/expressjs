const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // CORS 설정
app.use(express.json()); // JSON 요청 파싱

app.use("/api/users", userRoutes); // 유저 관련 API

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});