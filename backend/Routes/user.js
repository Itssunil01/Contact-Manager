const express = require("express");
const router = express.Router();
const {signup , login} = require("../Controller/user");
const {signupValidation , loginValidation} = require("../Middleware/user");

router.post("/signup" , signupValidation, signup )

router.post("/login", loginValidation,  login)

module.exports = router;