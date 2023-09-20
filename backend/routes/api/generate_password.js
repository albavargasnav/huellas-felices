const express = require('express')
const router = express.Router()
const GeneratePasswordController = require('../../controllers/GeneratePasswordController')

router.post('/', GeneratePasswordController.createNewUserPassword);

module.exports = router
