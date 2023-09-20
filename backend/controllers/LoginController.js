const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

// Controlador para buscar usuario
exports.loginUsuarios = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // buscar el usuario en la BD
    const usuario = await Usuario.findOne({ email: email })

    // si no lo encuentro o no coincide la contraseña --> error
    if (!usuario || !(await usuario.comparePassword(password))) {
      res.status(401).json({ menssage: 'Correo o Contraseña Incorrectos' })
      return
    }

    // si existe y la contrseña coincide
    // crear un token JWT con el _id del usuario dentro y usuario.name

    const token = await jwt.sign({ _id: usuario._id, name: usuario.name }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    })

    res.status(201).json({jwt: token})
  } catch (err) {
    next(err)
  }
}
// module.exports = LoginController
