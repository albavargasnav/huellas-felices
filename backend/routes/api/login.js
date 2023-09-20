const express = require('express')
const router = express.Router()
const LoginController = require('../../controllers/LoginController')

router.post('/', LoginController.loginUsuarios)

module.exports = router
