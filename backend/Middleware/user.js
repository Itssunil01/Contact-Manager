const {signupSchema , loginSchema} = require("../schemaValidation/user");

// signup validation middleware
module.exports.signupValidation = (req,res,next) => {
    const { error} = signupSchema.validate(req.body);
    if(error){
        return res.status(404).json({ error: error.details[0].message })
    }
    next();
}

// login validation middleware
module.exports.loginValidation = (req,res,next) => {
    const { error} = loginSchema.validate(req.body);
    if(error){
        return res.status(404).json({ error: error.details[0].message })
    }
    next();
}
