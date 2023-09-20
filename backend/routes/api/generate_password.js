const express = require('express')
const router = express.Router()
const GeneratePasswordController = require('../../controllers/GeneratePasswordController')

router.put('/', GeneratePasswordController.verifyTokenPage);

  
module.exports = router
