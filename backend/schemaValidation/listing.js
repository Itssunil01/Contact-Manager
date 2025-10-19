const joi = require("joi")

// create listing validation
const createListingSchema = joi.object({
    title: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.number().required(),
})

// edit listing validation
const editListingSchema = joi.object({
    title: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.number().required(),
})

module.exports = {createListingSchema , editListingSchema};