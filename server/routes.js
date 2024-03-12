const express = require("express");
const { signInUser } = require("./auth");
const { registerUser, getUsers } = require("./register");
const { chatmail } = require("./chat")

const router = express.Router();

router.post("/register", registerUser);
router.post("/signIn", signInUser);

router.post("/chat", chatmail);
router.get("/getUser", getUsers);

module.exports = router;