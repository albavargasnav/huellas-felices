'use strict'

const express = require('express')
const router = express.Router()
const { Anuncio } = require('../../models')

router.get('/', async (req, res, next) => {
  try {
    // filtros
    const filterByName = req.query.nombre
    const filterByRaza = req.query.raza
    const filterByStock = req.query.disponible
    const filterByPerro = req.query.perro
    const filterBySexo = req.query.sexo
    const filterBySize = req.query.size

    // paginación
    const start = parseInt(req.query.start) || 0
    const limit = parseInt(req.query.limit) || 1000 // nuestro api devuelve max 1000 registros
    // ordenar
    const sort = {creacion: -1}
    // selección de campos
    const fields = req.query.fields

    const filtro = {}

    if (filterByName) {
      filtro.nombre = new RegExp(req.query.nombre, 'i')
    }
    if (filterByRaza) {
      filtro.raza = new RegExp(req.query.raza, 'i')
    }
    if (filterByStock) {
      filtro.disponible = filterByStock
    }
    if (filterByPerro) {
      filtro.perro = filterByPerro
    }
    if (filterBySexo) {
      filtro.sexo = filterByPerro
    }
    if (filterBySize) {
      filtro.size = filterBySize
    }
    const anuncios = await Anuncio.lista(filtro, start, limit, sort, fields)
    res.locals.anuncios = anuncios
    res.json(anuncios)
  } catch (error) {
    next(error)
  }
})

// GET api/anuncios/tags
router.get('/tags', async (req, res, next) => {
  const listaTags = await Anuncio.allowedSize()
  res.json(listaTags)
})
module.exports = router
