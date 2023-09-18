'use strict'

const multer = require('multer')
const path = require('path')

// Configuración de Multer para cargar imágenes
const storage = multer.diskStorage({
  destination: './public/images/anuncios',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

module.exports = multer({ storage })
