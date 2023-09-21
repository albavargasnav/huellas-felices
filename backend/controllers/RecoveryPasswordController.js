/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
const { Usuario } = require('../models')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

sendEmailToken = async (email, enlaceToken) => {
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'huellasfelicesnoreply@gmail.com',
      pass: 'sfur vwis jurz deez'
    },
    tls: {
      rejectUnauthorized: false
    }
  }

  const mensaje = {
    from: 'huellasfelicesnoreply@gmail.com',
    to: email,
    subject: 'Restaurar contraseña',
    html: `
      <div style="text-align: center; width: 34%; background-color: #f0f0f0;">
        <div style="padding: 20px; border-radius: 10px;">
          <img src="https://static.vecteezy.com/system/resources/previews/009/344/667/non_2x/dog-paw-free-png.png" alt="huellas-felices" style="width: 170px;">
          <h1>Restablecer contraseña</h1>
          <p style="font-size: 16px;">Haga clic en el botón para reemplazar su contraseña de Huellas Felices:</p>
          <a href="${enlaceToken}" style="margin-bottom: 30px; text-decoration: none; background-color: #428bca; color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; margin-top: 10px;">Reestablecer contraseña</a>
        </div>
      </div>
    `
    //text: `Haga clic en el siguiente enlace para cambiar su contraseña:\n${enlaceToken}`
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(mensaje)

  console.log(info)
}

exports.verificarEmailRegistrado = async (req, res, next) => {
  try {
    const { email } = req.body

    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({mensaje: 'Correo no válido'})
    }

    const usuario = await Usuario.findOne({ email: email })

    if (!usuario) {
      res.status(404).json({ statusCode: '404', message: 'Correo electrónico no registrado' })
      return
    }

    res.locals.usuario = usuario

    // Genera un token JWT con el _id del usuario
    const token = jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    })

    let enlaceToken = `${process.env.BACK_APP_API_BASE_URL}generatepassword?token=${token}`
    if (process.env.NODE_ENV === 'production') {
      enlaceToken = `${process.env.BACK_APP_API_BASE_URL_PROD}generatepassword?token=${token}`
    }

    await sendEmailToken(usuario.email, enlaceToken)

    res.status(201).json({jwt: token})
  } catch (err) {
    next(err)
  }
}
