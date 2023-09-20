'use strict'

const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { Usuario } = require('../../models')

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const usuario = await Usuario.findOne({ email: email })

    if (!usuario || !(await usuario.comparePassword(password))) {
      res.json({error: 'invalid credentials'})
      return
    }

    const token = await jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    })

    res.json({jwt: token})
  } catch (err) {
    next(err)
  }
})

module.exports = router
