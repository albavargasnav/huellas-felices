'use strict'

const mongoose = require('mongoose')

const solicitudAdopcionSchema = mongoose.Schema({
  nombre: String,
  apellidos: String,
  dni: String,
  fechaNacimiento: Date,
  codigoPostal: String,
  provincia: String,
  email: String,
  movil: String,
  estadoCivil: String,
  tipoVivienda: String,
  motivoAdopcion: String
})

// crear el modelo
var FormularioAdopcion = mongoose.model('FormularioAdopcion', solicitudAdopcionSchema)

module.exports = FormularioAdopcion
