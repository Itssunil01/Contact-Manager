const listing = require("../Modules/listing")

module.exports.createlisting = async(req,res) => {
    try{
        const {title , email , phone} = req.body;

        if(!title || !email || !phone){
            return res.status(404).json({message: "All fields are required" , success: false});
        }

        const newListing = await listing({title , email , phone});
        await newListing.save();
        return res.status(200).json({message: "Listing created successfully" , success: true});

    }catch(err){
        return res.status(500).json({message: err.message , success: false});
    }
}

module.exports.editlisting = async(req,res) => {
    try{
        const { id , title , email , phone} = req.body

        const body = await listing.findById(id);

        if(!body){
            return res.status(404).json({message: "Listing Not Exist" , success: false})
        }

        if(!title || !email || !phone){
            return res.status(404).json({message: "All fields are required" , success: false});
        }

        let editListing = await listing.findByIdAndUpdate(id , {title , email , phone} , {new: true})

        return res.status(500).json({message: "Edited Successfully" , success: true , data: editListing})
        

    } catch(err) {
        return res.status(500).json({message: err.message , success: false})
    }
}