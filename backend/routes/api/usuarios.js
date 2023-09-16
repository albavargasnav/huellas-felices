const express = require('express')
const router = express.Router()
const UsuarioController = require('../../controllers/UsuariosController')

// ruta para realizar login
router.post('/', UsuarioController.crearUsuario)

router.get('/:usuarioId', UsuarioController.obtenerUsuario)

router.put('/:usuarioId', UsuarioController.actualizarUsuario)

module.exports = router
