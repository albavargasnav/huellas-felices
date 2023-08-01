const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

// index (req, res, next) {
//   res.locals.error = ''
//   res.locals.email = ''
//   res.render('login')
// }

exports.loginUsuarios = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // buscar el usuario en la BD
    const usuario = await Usuario.findOne({ email: email })

    // si no lo encuentro o no coincide la contraseña --> error
    if (!usuario || !(await usuario.comparePassword(password))) {
      res.json({error: 'invalid credentials'})
      return
    }

    // si existe y la contrseña coincide
    // crear un token JWT con el _id del usuario dentro
    const token = await jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    })

    res.json({jwt: token})
  } catch (err) {
    next(err)
  }
}
// module.exports = LoginController
