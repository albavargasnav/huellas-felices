const express = require('express')
const router = express.Router()
const FormularioAdopcionController = require('../../controllers/FormularioAdopcionController')
const { FormularioAdopcion } = require('../../models')

// ruta para crear usuario
router.post('/', FormularioAdopcionController.crearSolicitud)

// A modificar cuando se decida si queremos obtener los datos del formulario
router.get('/:usuarioId', FormularioAdopcionController.obtenerFormulario)

module.exports = router
