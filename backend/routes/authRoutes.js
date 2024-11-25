const express = require("express");
const { signUpUser, logIn } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", logIn);

module.exports = router;
