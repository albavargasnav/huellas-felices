const { Usuario } = require('../models');
const jwt = require('jsonwebtoken');

exports.verifyTokenPage = (req, res) => {
    console.log('Pasa por aqui');
    const token = req.body.token || req.query.token || req.get('Authorization')
  
    // Verificar el token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(token)
        console.error('Error al verificar el token:', err);
        return res.status(400).send('Token no válido');
      }
  
      res.status(200);
      res.json(token);

    });
  };
