const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

exports.createNewUserPassword = async (req, res) => {
  const usuarioId = req.user;
  let body = req.body
  if (body) {
    body.password = await Usuario.hashPassword(body.password)
  }

  await Usuario.findOneAndUpdate({_id: usuarioId}, {password : body.password}, function (err, place) {
    console.log(usuarioId)
    if (err) {
      res.status(500).json({ error: err })
    }
  })

  res.status(201).json({ result: 'Actualizado correctamente' })
    
};
