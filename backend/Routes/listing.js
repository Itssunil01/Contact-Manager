const express = require('express');
const router = express.Router();
const { createlisting, editlisting } = require('../Controller/listing');
const { createValidation, editValidation } = require('../Middleware/listing');

router.post("/create" , createValidation , createlisting);
router.put("/edit" , editValidation , editlisting);

module.exports = router;