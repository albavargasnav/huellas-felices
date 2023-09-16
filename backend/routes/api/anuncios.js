'use strict'

const express = require('express')
const upload = require('../../lib/multerConfig')
const router = express.Router()
const { Anuncio } = require('../../models')

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

router.delete('/:anuncioId', (req, res, next) => {
  Anuncio.deleteOne({ '_id': req.params.anuncioId }).then(() => {
    res.json({result: 'El anuncio se ha borrado correctamente'})
  }).catch(err => { err.status = 404; err.message = 'Anuncio no encontrado'; next(err) })
})

module.exports = router
