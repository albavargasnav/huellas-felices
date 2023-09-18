const express = require('express')
const router = express.Router()
const UsuarioController = require('../../controllers/UsuariosController')

// ruta para crear usuario
router.post('/', UsuarioController.crearUsuario)

router.get('/:usuarioId', UsuarioController.obtenerUsuario)

router.get('/name/:name', UsuarioController.obtenerUsuarioPorNombre)

router.put('/:usuarioId', UsuarioController.actualizarUsuario)

module.exports = router
