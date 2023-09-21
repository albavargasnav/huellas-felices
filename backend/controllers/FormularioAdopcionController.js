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
    to: 'huellasfelicesnoreply@gmail.com',
    subject: 'Nueva solicitud adopción',
    html: `
    <div style="width: 34%; background-color: #f0f0f0;">
      <div style="padding: 20px; border-radius: 10px;">
        <img src="https://static.vecteezy.com/system/resources/previews/009/344/667/non_2x/dog-paw-free-png.png" alt="huellas-felices" style="width: 170px;">
        <h1>Petición de adopción</h1>
        <h2>Nuevo Mensaje</h2>
        <p style="font-size: 14px;">Estimad@ ${newSolicitud.datosUsuarioCreador.name}</p>
        <p style="font-size: 14px;">Me pongo en contacto con usted porque me gustaría adoptar a ${newSolicitud.mascota}.\n,</p>
        <p style="font-size: 14px;">Por favor, le ruego póngase en contacto conmigo por los siguientes canales:</p>
        <p style="font-size: 14px;">Teléfono: ${newSolicitud.datosUsuarioNavegante.telefono}</p>
        <p style="font-size: 14px;">Email: ${newSolicitud.datosUsuarioNavegante.email}</p>
      
      </div>
    </div>
  `
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(mensaje)
}
