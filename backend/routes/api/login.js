const express = require('express')
const router = express.Router()
const LoginController = require('../../controllers/LoginController')

// ruta para realizar login
router.post('/login', LoginController.loginUsuarios)

module.exports = router
