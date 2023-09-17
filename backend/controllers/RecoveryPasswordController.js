const { Usuario } = require('../models')
const validator = require('validator')

exports.verificarEmailRegistrado = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({mensaje: 'Correo no válido'})
    }

    const usuario = await Usuario.findOne({ email: email });

    if (!usuario) {
      res.status(404).json({ statusCode: '404', message: 'Correo electrónico no registrado' })
      return;
    }

    res.status(200).json({ statusCode: '200', message: 'Correo electrónico registrado' })
  } catch (err) {
    next(err);
  }
}





