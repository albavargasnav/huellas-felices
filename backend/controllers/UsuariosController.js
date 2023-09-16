const { response } = require('../app')
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

exports.obtenerUsuario = async (req, res, next) => {
  try {
    const usuarioId = req.params.usuarioId
    let response = await Usuario.findById(usuarioId)
    response.password = ''
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: 'Hubo un error al obtener el usuario.' })
  }
}

exports.actualizarUsuario = async (req, res, next) => {
  const usuarioId = req.params.usuarioId
  let body = req.body
  if (body.password) {
    body.password = await Usuario.hashPassword(body.password)
  }
  await Usuario.findOneAndUpdate({_id: usuarioId}, body, function (err, place) {
    if (err) {
      res.status(500).json({ error: err })
    }
  })
  res.status(201).json({ result: 'Actualizado correctamente' })
}
