const Usuario = require('../models/Usuario')
const validator = require('validator')

exports.crearUsuario = async (req, res, next) => {
  try {
    const {name, email, password} = req.body

    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({mensaje: 'Correo no válido'})
    }

    const usuarioExistente = await Usuario.findOne({ $or: [{ name }, { email }] })

    if (usuarioExistente) {
      if (usuarioExistente.name === name) {
        return res.status(400).json({ mensaje: 'El nombre de usuario ya está en uso.' })
      } else {
        return res.status(400).json({ mensaje: 'El email ya está en uso.' })
      }
    }

    const newUser = new Usuario({
      name: name,
      email: email,
      password: await Usuario.hashPassword(password)
    })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({mensaje: 'Error interno del servidor.'})
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

exports.obtenerUsuarioPorNombre = async (req, res, next) => {
  try {
    const nameUser = req.params.name
    let response = await Usuario.find({ name: nameUser })
    response[0].password = ''
    res.status(200).json(response[0])
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
