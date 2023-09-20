const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

// exports.verifyTokenPage = (req, res) => {
//     const token = req.body.token || req.query.token || req.get('Authorization')
  
//     // Verificar el token
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.log(token)
//         console.error('Error al verificar el token:', err);
//         return res.status(400).send('Token no válido');
//       }
  
//       res.status(200);
//       res.json(token);

//     });
    
// };


exports.verifyTokenPage = async (req, res) => {
  //const token = req.body.token || req.query.token || req.get('Authorization');

  //const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const usuarioId = req.user;
  //const name = req.user.name;
  let body = req.body
  if (body) {
    body.password = await Usuario.hashPassword(body.password)
  }

  await Usuario.findOneAndUpdate({_id: usuarioId}, {password : body.password}, function (err, place) {
    if (err) {
      res.status(500).json({ error: err })
    }
  })
  
  res.status(201).json({ result: 'Actualizado correctamente' })
    
};

