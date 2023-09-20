const FormularioAdopcion = require('../models/FormularioAdopcion')
const nodemailer = require('nodemailer')

exports.crearSolicitud = async (req, res, next) => {
  try {
    const {
      nombre,
      apellidos,
      dni,
      fechaNacimiento,
      codigoPostal,
      provincia,
      email,
      movil,
      estadoCivil,
      tipoVivienda,
      motivoAdopcion
    } = req.body

    const newSolicitud = new FormularioAdopcion({
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      fechaNacimiento: fechaNacimiento,
      codigoPostal: codigoPostal,
      provincia: provincia,
      email: email,
      movil: movil,
      estadoCivil: estadoCivil,
      tipoVivienda: tipoVivienda,
      motivoAdopcion: motivoAdopcion
    })
    await newSolicitud.save()
    res.status(201).json(newSolicitud)
    await sendEmail(newSolicitud)
  } catch (err) {
    res.status(400).json({ mensaje: 'Ha habido un error' })
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
    to: newSolicitud.email,
    subject: 'Nueva solicitud adopción',
    text: `Nombre: ${newSolicitud.nombre} ${newSolicitud.apellidos}\nDireccion: ${newSolicitud.provincia} y codigo postal: ${newSolicitud.codigoPostal}\nEmail: ${newSolicitud.emial}\nMovil: ${newSolicitud.movil}\nAnimal y motivo de adopcion: ${newSolicitud.motivoAdopcion}`
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(mensaje)
}

exports.obtenerFormulario = async (req, res, next) => {
  try {
    const solicitudId = req.params.solicitudId
    let response = await FormularioAdopcion.findById(solicitudId)
    response.password = ''
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: 'Hubo un error al obtener la solicitud.' })
  }
}
