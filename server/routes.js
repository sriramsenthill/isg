const express = require("express");
const { registerUser, signInUser } = require("./auth");
const { fileUpload } = require("./file");
const router = express.Router();

router.post("/register", registerUser);
router.post("/signIn", signInUser);


router.post("/fileUpload", fileUpload);

module.exports = router;