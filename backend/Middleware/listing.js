const {createListingSchema, editListingSchema} = require('../schemaValidation/listing');

// create listing validation middleware
module.exports.createValidation = (req,res,next) => {
    const { error } = createListingSchema.validate(req.body);
    if(error){
        return res.status(404).json({ error: error.details[0].message})
    }
    next();
}

// edit listing validation middleware
module.exports.editValidation = (req,res,next) => {
    const { error } = editListingSchema.validate(req.body);
    if(error){
        return res.status(404).json({ error: error.details[0].message})
    }
    next();
}