const User = require("../Modules/user");

// Signup Controller
module.exports.signup = async (req,res) => {
    try{
        const {username , email , password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(404).json({message: "User already exists" , success: false});
        }

        if(!username || !email || !password){
            return res.status(404).json({message: "All fields are required" , success: false})
        }

        const newUser = await User({username , email});
        await User.register(newUser , password);
        return res.status(200).json({message: "User created successfully" , success: true});


    } catch(err){
        return res.status(500).json({message: err.message , success: false});
    }

}

// login controller
module.exports.login = async (req,res) => {
    try{
        const {username , password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json({message: "User doesnot exist" , success: false});
        }

        const authUser = new User({username});
        const authenticate = User.authenticate();
        const result = await authenticate(username , password);

        if(!result.user){
            return res.status(404).json({message: "Invalid username or password" , success: false});
        }

        return res.status(200).json({message: "User Login successfully" , success: true});


    } catch(err){
        return res.status(500).json({message: err.message , success: false});
    }
}