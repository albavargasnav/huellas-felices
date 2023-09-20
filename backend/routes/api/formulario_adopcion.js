const express = require('express')
const router = express.Router()
const FormularioAdopcionController = require('../../controllers/FormularioAdopcionController')

router.post('/', FormularioAdopcionController.crearSolicitud)

module.exports = router
