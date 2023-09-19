const express = require('express')
const router = express.Router()
const GeneratePasswordController = require('../../controllers/GeneratePasswordController')

router.post('/', GeneratePasswordController.verifyTokenPage);

  
module.exports = router
