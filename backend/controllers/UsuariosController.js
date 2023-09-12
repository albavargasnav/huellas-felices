const Usuario = require('../models/Usuario')

// Controlador para crear un nuevo usuario

exports.crearUsuario = async (req, res, next) => {
  try {
    const {name, email, password} = req.body
    const newUser = new Usuario({
      name: name,
      email: email,
      password: await Usuario.hashPassword(password)
    })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({ error: 'Hubo un error al crear el usuario.' })
  }
}
