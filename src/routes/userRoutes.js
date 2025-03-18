const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);  // 전체 유저 조회
router.post("/", createUser); // 유저 생성

module.exports = router;