const express = require("express");
const { registerUser, signInUser } = require("./auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/signIn", signInUser);

module.exports = router;