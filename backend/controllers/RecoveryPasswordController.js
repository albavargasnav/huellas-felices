const { Usuario } = require('../models');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


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
    
    //console.log('Email verificado:', res.locals.usuario);
    res.locals.usuario = usuario
    //res.status(200).json({ statusCode: '200', message: 'Correo electrónico registrado' })

    // Genera un token JWT con el _id del usuario
    const token = jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '2d' // Puedes ajustar la duración del token según tus necesidades
    });

    const enlaceToken = `${process.env.BACK_APP_API_BASE_URL}generatepassword?token=${token}`;
    if(process.env.NODE_ENV === 'production') {
      enlaceToken = `${process.env.BACK_APP_API_BASE_URL_PROD}generatepassword?token=${token}`;
    }
    console.log(enlaceToken);

    //await sendEmailToken(usuario.email, token);
    await sendEmailToken(usuario.email, enlaceToken);

    res.status(201).json({jwt: token})
    
    //console.log('Email verificado:', res.locals.usuario);
  } catch (err) {
    next(err);
  }
}

sendEmailToken = async (email, enlaceToken) => {

    const config = {
        host : 'smtp.gmail.com',
        port : 587,
        secure: false,
        auth : {
            user : 'huellasfelicesnoreply@gmail.com',
            pass : 'sfur vwis jurz deez',
        },
        tls: {
            rejectUnauthorized: false
        }
    }

    const mensaje = {
        from : 'huellasfelicesnoreply@gmail.com',
        to : email,
        subject : 'Correo de pruebas',
        text : `Haga clic en el siguiente enlace para cambiar su contraseña:\n${enlaceToken}`,
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info);

}

