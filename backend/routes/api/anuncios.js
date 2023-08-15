'use strict'

const express = require('express')
const upload = require('../../lib/multerConfig')
const router = express.Router()
const { Anuncio } = require('../../models')

router.get('/', (req, res, next) => {
  const start = parseInt(req.query.start) || 0
  const limit = parseInt(req.query.limit) || 1000 // nuestro api devuelve max 1000 registros
  const sort = req.query.sort || '_id'
  const includeTotal = req.query.includeTotal === 'true'
  const filters = {}
  if (typeof req.query.size !== 'undefined') {
    filters.size = req.query.size
  }

  if (typeof req.query.venta !== 'undefined') {
    filters.venta = req.query.venta
  }
  if (typeof req.query.sexo !== 'undefined') {
    filters.sexo = req.query.sexo
  }
  if (typeof req.query.perro !== 'undefined') {
    filters.perro = req.query.perro
  }

  if (typeof req.query.precio !== 'undefined' && req.query.precio !== '-') {
    if (req.query.precio.indexOf('-') !== -1) {
      filters.precio = {}
      let rango = req.query.precio.split('-')
      if (rango[0] !== '') {
        filters.precio.$gte = rango[0]
      }

      if (rango[1] !== '') {
        filters.precio.$lte = rango[1]
      }
    } else {
      filters.precio = req.query.precio
    }
  }

  if (typeof req.query.nombre !== 'undefined') {
    filters.nombre = new RegExp('^' + req.query.nombre, 'i')
  }

  Anuncio.list(filters, start, limit, sort, includeTotal).then(anuncios => {
    res.json({ ok: true, result: anuncios })
  }).catch(err => next(err))
})

router.post('/', upload.single('foto'), async (req, res, next) => {
  try {
    const anuncio = new Anuncio(req.body)

    // save image
    await anuncio.setFoto({
      path: req.file.path,
      originalName: req.file.originalname
    })

    const saved = await anuncio.save()
    res.json({ok: true, result: saved})
  } catch (err) { next(err) }
})

router.get('/:anuncioId', (req, res, next) => {
  Anuncio.list({ '_id': req.params.anuncioId }, 0, 1, '_id', false).then(anuncios => {
    res.json({result: anuncios.rows[0]})
  }).catch(err => { err.status = 404; err.message = 'Anuncio no encontrado'; next(err) })
})

module.exports = router
