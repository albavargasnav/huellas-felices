const express = require('express')
const router = express.Router()
const UsuarioController = require('../../controllers/UsuariosController')

// ruta para crear usuario
router.post('/', UsuarioController.crearUsuario)

module.exports = router
