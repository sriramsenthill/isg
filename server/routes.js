const express = require("express");
const { signInUser } = require("./auth");
const { registerUser, getUsers } = require("./register");
const { chatmail } = require("./chat")
const { registration, getDetails } = require("./registrationApplication")

const router = express.Router();

router.post("/register", registerUser);
router.post("/signIn", signInUser);

router.post("/chat", chatmail);
router.get("/getUser", getUsers);

router.post("/registration", registration);
router.get("/getDetails", getDetails);


module.exports = router;