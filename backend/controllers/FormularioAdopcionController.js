const FormularioAdopcion = require('../models/FormularioAdopcion')

exports.crearSolicitud = async (req, res, next) => {
  try {
    const {
      nombre, apellidos, dni,
      fechaNacimiento, codigoPostal, provincia,
      email, movil, estadoCivil,
      tipoVivienda, motivoAdopcion
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
  } catch (err) {
    res.status(400).json({mensaje: 'Ha habido un error'})
  }
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
