'use strict'

const mongoose = require('mongoose')
const fs = require('fs-extra')
const path = require('path')
const cote = require('cote')
const fsPromises = require('fs').promises

const { IMAGE_URL_BASE_PATH } = process.env

const thumbnailRequester = new cote.Requester({
  name: 'thumbnail creator client'
}, { log: false, statusLogsEnabled: false })

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  disponible: { type: Boolean, index: true },
  edad: { type: Date, index: true },
  raza: { type: String, indez: true },
  sexo: { type: Boolean, index: true },
  size: { type: [String], index: true },
  foto: String,
  perro: { type: Boolean, index: true },
  descripcion: { type: String }
})

/**
 * lista de tags permitidos
 */
anuncioSchema.statics.allowedSize = function () {
  return ['Pequeño', 'Mediano', 'Grande']
}

/**
 * carga un json de anuncios
 */
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

  // poner ruta base a imagenes
  result.rows.forEach(r => (r.foto = r.foto ? path.join(IMAGE_URL_BASE_PATH, r.foto) : null))

  if (cb) return cb(null, result) // si me dan callback devuelvo los resultados por ahí
  return result // si no, los devuelvo por la promesa del async (async está en la primera linea de esta función)
}

anuncioSchema.methods.setFoto = async function ({ path, originalname: originalName }) {
  if (!originalName) return

  // copiar el fichero desde la carpeta uploads a public/images/anuncios
  // usando en nombre original del producto
  // SUGERENCIA: en un proyecto real, valorar si quereis poner el _id del usuario (this._id)
  // para diferenciar imagenes con el mismo nombre de distintos usuarios
  const imagePublicPath = path.join(__dirname, '../public/images/anuncios', originalName)
  await fs.copy(path, imagePublicPath)

  this.foto = originalName

  // Create thumbnail
  thumbnailRequester.send({ type: 'createThumbnail', image: imagePublicPath })
}

var Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio
