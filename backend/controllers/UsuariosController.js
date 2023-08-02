const Usuario = require('../models/Usuario')

// Controlador para crear un nuevo usuario

exports.crearUsuario = async (req, res, next) => {
  try {
    const {name, email, password} = req.body
    const nuevoUsuario = new Usuario({name, email, password})
    await nuevoUsuario.save()
    res.json(nuevoUsuario)
  } catch (err) {
    res.json({error: 'error al crear usuario'})
  }
}
