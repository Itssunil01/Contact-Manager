const joi = require("joi");

// signup Validation
const signupSchema = joi.object({
    username: joi.string().required(),
    email:joi.string().required(),
    password: joi.string().min(3).max(10).required(),
})

// login Validation
const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(3).max(10).required(),
})

module.exports = {signupSchema , loginSchema};