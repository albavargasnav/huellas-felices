const Usuario = require('../models/Usuario')
const validator = require('validator')

// Controlador para crear un nuevo usuario

exports.crearUsuario = async (req, res, next) => {
  try {
    const {name, email, password} = req.body

    // Verificar si el correo electrónico es válido
    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({mensaje: 'Correo no válido'})
    }

    const newUser = new Usuario({
      name: name,
      email: email,
      password: await Usuario.hashPassword(password)
    })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({mensaje: 'Correo ya está en uso'})
  }
}
