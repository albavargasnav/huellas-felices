'use strict'

const mongoose = require('mongoose')

const path = require('path')

const fsPromises = require('fs').promises

const { IMAGE_URL_BASE_PATH } = process.env

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  disponible: { type: Boolean, index: true },
  edad: { type: Date, index: true },
  raza: { type: String, index: true },
  sexo: { type: Boolean, index: true },
  size: { type: [String], index: true },
  foto: String,
  perro: { type: Boolean, index: true },
  descripcion: { type: String },
  creacion: { type: Date, index: true },
  usuarioName: { type: String, index: true }
})

anuncioSchema.statics.allowedSize = function () {
  return ['Pequeño', 'Mediano', 'Grande']
}

anuncioSchema.statics.cargaJson = async function (fichero) {
  const data = await fsPromises.readFile(fichero, { encoding: 'utf8' })

  if (!data) {
    throw new Error(fichero + ' está vacio!')
  }

  const anuncios = JSON.parse(data).anuncios

  for (var i = 0; i < anuncios.length; i++) {
    await (new Anuncio(anuncios[i])).save()
  }

  return anuncios.length
}

anuncioSchema.statics.createRecord = function (nuevo, cb) {
  new Anuncio(nuevo).save(cb)
}

anuncioSchema.statics.lista = function (filtro, skip, limit, sort, fields) {
  const query = Anuncio.find(filtro) // thenables
  query.skip(skip)
  query.limit(limit)
  query.sort(sort)
  query.select(fields)
  return query.exec()
}

anuncioSchema.statics.list = async function (filters, startRow, numRows, sortField, includeTotal, cb) {
  const query = Anuncio.find(filters)
  query.sort(sortField)
  query.skip(startRow)
  query.limit(numRows)
  // query.select('nombre venta');

  const result = {}

  if (includeTotal) {
    result.total = await Anuncio.countDocuments()
  }
  result.rows = await query.exec()

  result.rows.forEach(r => (r.foto = r.foto ? path.join(IMAGE_URL_BASE_PATH, r.foto) : null))

  if (cb) return cb(null, result)
  return result
}
var Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio
