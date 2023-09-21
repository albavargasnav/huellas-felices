const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

exports.loginUsuarios = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const usuario = await Usuario.findOne({ email: email })

    if (!usuario || !(await usuario.comparePassword(password))) {
      res.status(401).json({ menssage: 'Correo o Contraseña Incorrectos' })
      return
    }

    const token = await jwt.sign({ _id: usuario._id, name: usuario.name }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    })

    res.status(201).json({jwt: token})
  } catch (err) {
    next(err)
  }
}
