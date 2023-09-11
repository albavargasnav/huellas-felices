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
    const skip = req.query.skip
    const limit = req.query.limit
    // ordenar
    const sort = req.query.sort
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
      filtro.sexo = filterBySexo
    }
    if (filterBySize) {
      filtro.size = filterBySize
    }
    const anuncios = await Anuncio.lista(filtro, skip, limit, sort, fields)
    res.locals.anuncios = anuncios
    res.json(anuncios)
  } catch (error) {
    next(error)
  }
})

// GET api/anuncios/size
router.get('/tags', async (req, res, next) => {
  const listaTags = await Anuncio.allowedSize()
  res.json(listaTags)
})
module.exports = router
