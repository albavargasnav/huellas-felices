const express = require('express')
const router = express.Router()
const UsuarioController = require('../../controllers/UsuariosController')

// ruta para realizar login
router.post('/', UsuarioController.crearUsuario)

module.exports = router
