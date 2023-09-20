const express = require('express')
const router = express.Router()
const FormularioAdopcionController = require('../../controllers/FormularioAdopcionController')
const { FormularioAdopcion } = require('../../models')

router.post('/', FormularioAdopcionController.crearSolicitud)

router.get('/:usuarioId', FormularioAdopcionController.obtenerFormulario)

module.exports = router
