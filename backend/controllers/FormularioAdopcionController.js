const Usuario = require('../models/Usuario')
const nodemailer = require('nodemailer')

exports.crearSolicitud = async (req, res, next) => {
  try { 
    const responseCreador = await Usuario.find({ name: req.body.creador })
    const datosUsuarioCreador = responseCreador[0]

    const datosUsuarioNavegante = await Usuario.findById(req.body.idNavegante)

    const newSolicitud = {
      mascota: req.body.mascota,
      datosUsuarioCreador: datosUsuarioCreador,
      datosUsuarioNavegante: datosUsuarioNavegante,
      descMascota: req.body.descMascota
    }

    await sendEmail(newSolicitud)
    res.status(200).json({ mensaje: 'TODO OK' })
  } catch (err) {
    res.status(400).json({ mensaje: err })
  }
}

sendEmail = async (newSolicitud) => {
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
    to: 'mjserrano89@gmail.com',
    subject: 'Nueva solicitud adopción',
    text: `Estimad@ ${newSolicitud.datosUsuarioCreador.name}, me pongo en contacto con usted porque me gustaría adoptar a ${newSolicitud.mascota}.\n Por favor, le ruego póngase en contacto conmigo por los siguientes canales:\nTeléfono: ${newSolicitud.datosUsuarioNavegante.telefono}\nEmail: ${newSolicitud.datosUsuarioNavegante.email}\n Quedo a la espera de su respuesta.\nUn Saludo.`
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(mensaje)
}
